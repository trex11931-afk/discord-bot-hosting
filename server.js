const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'db.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function ensureDatabase() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    const seed = {
      plans: [
        {
          id: 'starter',
          name: 'Starter',
          price: 40,
          coins: 200,
          storage: 40,
          features: ['1 bot', '24/7 uptime', '5 GB storage', 'Basic support'],
          popular: false
        },
        {
          id: 'pro',
          name: 'Pro',
          price: 90,
          coins: 500,
          storage: 120,
          features: ['Unlimited bots', 'Priority support', 'Auto backups', 'Custom domains'],
          popular: true
        },
        {
          id: 'vip',
          name: 'VIP',
          price: 180,
          coins: 900,
          storage: 300,
          features: ['Dedicated resources', 'Advanced monitoring', 'Premium support', 'White-label'],
          popular: false
        }
      ],
      users: [
        {
          id: 'admin-1',
          name: 'Admin',
          email: 'admin@marko.host',
          password: 'admin123',
          coins: 5000,
          storageLimit: 300,
          plan: 'VIP',
          role: 'admin'
        }
      ],
      bots: [
        {
          id: 'bot-1',
          ownerId: 'admin-1',
          name: 'Mira Bot',
          prefix: '!',
          region: 'Europe',
          memory: '1 GB',
          storage: 20,
          status: 'online',
          uptime: '99.9%' 
        }
      ]
    };

    fs.writeFileSync(DATA_FILE, JSON.stringify(seed, null, 2));
  }
}

function readDB() {
  ensureDatabase();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeDB(db) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2));
}

function sanitizeUser(user) {
  if (!user) return null;
  const { password, ...safeUser } = user;
  return safeUser;
}

function totalBotsStorage(ownerId, db) {
  return db.bots
    .filter((bot) => bot.ownerId === ownerId)
    .reduce((sum, bot) => sum + Number(bot.storage || 0), 0);
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, app: 'MARKO Discord Hosting', time: new Date().toISOString() });
});

app.get('/api/plans', (req, res) => {
  const db = readDB();
  res.json(db.plans);
});

app.post('/api/register', (req, res) => {
  const db = readDB();
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email and password are required.' });
  }

  const exists = db.users.some((user) => user.email.toLowerCase() === String(email).toLowerCase());
  if (exists) {
    return res.status(409).json({ error: 'This email is already registered.' });
  }

  const newUser = {
    id: `user-${Date.now()}`,
    name,
    email: email.toLowerCase(),
    password,
    coins: 150,
    storageLimit: 40,
    plan: 'Starter',
    role: 'user'
  };

  db.users.push(newUser);
  writeDB(db);
  res.status(201).json({ user: sanitizeUser(newUser), message: 'Account created successfully.' });
});

app.post('/api/login', (req, res) => {
  const db = readDB();
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const user = db.users.find((item) => item.email.toLowerCase() === String(email).toLowerCase() && item.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  res.json({ user: sanitizeUser(user), message: 'Login successful.' });
});

app.get('/api/dashboard/:userId', (req, res) => {
  const db = readDB();
  const user = db.users.find((item) => item.id === req.params.userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const bots = db.bots.filter((bot) => bot.ownerId === req.params.userId);
  const stats = {
    totalBots: bots.length,
    onlineBots: bots.filter((bot) => bot.status === 'online').length,
    storageUsed: totalBotsStorage(req.params.userId, db),
    storageLimit: user.storageLimit,
    coins: user.coins,
    totalRevenue: db.users.reduce((sum, item) => sum + (item.coins || 0), 0)
  };

  res.json({ user: sanitizeUser(user), bots, stats, plans: db.plans });
});

app.post('/api/add-bot', (req, res) => {
  const db = readDB();
  const { userId, name, prefix, size = 20, region = 'Europe' } = req.body || {};

  if (!userId || !name || !prefix) {
    return res.status(400).json({ error: 'User, bot name and prefix are required.' });
  }

  const user = db.users.find((item) => item.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const usedStorage = totalBotsStorage(userId, db);
  const nextStorage = Number(size);

  if (usedStorage + nextStorage > Number(user.storageLimit)) {
    return res.status(400).json({
      error: `Your bot storage limit is full. Current used: ${usedStorage} GB / ${user.storageLimit} GB.`
    });
  }

  const bot = {
    id: `bot-${Date.now()}`,
    ownerId: userId,
    name,
    prefix,
    region,
    memory: size <= 60 ? '1 GB' : size <= 120 ? '2 GB' : '4 GB',
    storage: nextStorage,
    status: 'online',
    uptime: '99.9%'
  };

  db.bots.push(bot);
  writeDB(db);
  res.status(201).json({ message: 'Bot deployed successfully.', bot });
});

app.post('/api/buy-plan', (req, res) => {
  const db = readDB();
  const { userId, planId } = req.body || {};

  const user = db.users.find((item) => item.id === userId);
  const plan = db.plans.find((item) => item.id === planId);

  if (!user || !plan) {
    return res.status(404).json({ error: 'User or plan not found.' });
  }

  if (user.coins < plan.price) {
    return res.status(400).json({ error: `You need ${plan.price - user.coins} more coins to activate this plan.` });
  }

  user.coins -= plan.price;
  user.plan = plan.name;
  user.storageLimit = plan.storage;
  writeDB(db);

  res.json({ message: `${plan.name} plan activated successfully.`, user: sanitizeUser(user) });
});

app.post('/api/topup-coins', (req, res) => {
  const db = readDB();
  const { userId, amount } = req.body || {};
  const user = db.users.find((item) => item.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const value = Number(amount || 0);
  if (value <= 0) {
    return res.status(400).json({ error: 'Top-up amount must be greater than zero.' });
  }

  user.coins += value;
  writeDB(db);
  res.json({ message: `${value} coins added successfully.`, user: sanitizeUser(user) });
});

app.get('/api/admin', (req, res) => {
  const db = readDB();

  const stats = {
    users: db.users.length,
    bots: db.bots.length,
    onlineBots: db.bots.filter((bot) => bot.status === 'online').length,
    revenue: db.users.reduce((sum, user) => sum + (user.coins || 0), 0)
  };

  const users = db.users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    plan: user.plan,
    coins: user.coins,
    storageLimit: user.storageLimit,
    bots: db.bots.filter((bot) => bot.ownerId === user.id).length
  }));

  res.json({ stats, users });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

ensureDatabase();

app.listen(PORT, () => {
  console.log(`MARKO hosting app is running on http://localhost:${PORT}`);
});
