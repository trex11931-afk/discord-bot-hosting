* {
  box-sizing: border-box;
}

:root {
  --bg: #0a0d18;
  --bg-soft: #101827;
  --panel: rgba(17, 24, 39, 0.9);
  --panel-strong: #111827;
  --card: #0f172a;
  --card-alt: #111827;
  --line: rgba(148, 163, 184, 0.2);
  --text: #edf2ff;
  --muted: #a7b4d1;
  --primary: #8b5cf6;
  --primary-strong: #7c3aed;
  --brand: #50e3c2;
  --warning: #f59e0b;
  --danger: #ef4444;
  --success: #22c55e;
  --shadow: 0 20px 45px rgba(86, 57, 196, 0.25);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(139, 92, 246, 0.18), transparent 32%),
    radial-gradient(circle at bottom right, rgba(80, 227, 194, 0.12), transparent 26%),
    var(--bg);
  color: var(--text);
}

button,
input,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
  background: rgba(10, 13, 24, 0.7);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--brand));
  color: var(--text);
  font-weight: 900;
}

.main-nav {
  display: flex;
  gap: 30px;
  color: var(--muted);
}

.main-nav a:hover {
  color: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.primary-btn,
.secondary-btn,
.ghost-btn {
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 600;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  box-shadow: var(--shadow);
  padding: 13px 20px;
}

.primary-btn:hover {
  transform: translateY(-1px);
}

.secondary-btn {
  background: rgba(139, 92, 246, 0.12);
  color: var(--text);
  border: 1px solid rgba(139, 92, 246, 0.45);
  padding: 13px 20px;
}

.ghost-btn {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--line);
  padding: 12px 18px;
}

.large {
  padding: 15px 24px;
  font-size: 1rem;
}

.full {
  width: 100%;
}

.hero {
  padding: 70px 0 50px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 38px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  color: var(--brand);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.76rem;
  margin-bottom: 18px;
  font-weight: 700;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  line-height: 1.06;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin-top: 18px;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 620px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.hero-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;
}

.hero-metrics div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hero-metrics strong {
  font-size: 1.7rem;
}

.hero-metrics span {
  color: var(--muted);
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.glow-card {
  width: min(100%, 430px);
  padding: 24px;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.72));
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: var(--shadow);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.panel-pill {
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.12);
  color: var(--brand);
  border: 1px solid rgba(34, 197, 94, 0.2);
  font-size: 0.7rem;
  text-transform: uppercase;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot.online {
  background: var(--success);
  box-shadow: 0 0 18px rgba(34, 197, 94, 0.65);
}

.panel-bot {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(148, 163, 184, 0.05);
}

.bot-avatar,
.profile-avatar {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 18px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--brand));
  color: white;
}

.panel-bot h3 {
  margin: 0;
  font-size: 1.15rem;
}

.panel-bot p {
  margin: 6px 0 0;
  color: var(--muted);
}

.status-list {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
}

.status-list li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.section {
  padding: 70px 0;
}

.section-heading {
  margin-bottom: 28px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
}

.centered {
  text-align: center;
}

.feature-grid,
.plans-grid,
.steps-grid,
.faq-list {
  display: grid;
  gap: 24px;
}

.feature-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.feature-card,
.plan-card,
.step-card,
.faq-item,
.panel-card,
.mini-stat {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.22);
}

.feature-card {
  padding: 28px 22px;
}

.icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(139, 92, 246, 0.15);
  font-size: 1.7rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  margin: 0 0 12px;
  font-size: 1.2rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.prices {
  background: rgba(15, 23, 42, 0.2);
}

.plans-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.plan-card {
  padding: 28px 24px;
  position: relative;
}

.plan-card.popular {
  border-color: rgba(139, 92, 246, 0.7);
  transform: translateY(-8px);
}

.popular-badge {
  position: absolute;
  top: 18px;
  right: 18px;
  border-radius: 999px;
  background: rgba(139, 92, 246, 0.18);
  color: var(--text);
  font-size: 0.72rem;
  padding: 6px 10px;
  border: 1px solid rgba(139, 92, 246, 0.35);
}

.plan-card h3 {
  margin: 0;
  font-size: 1.5rem;
}

.plan-price {
  margin: 18px 0 12px;
  display: flex;
  align-items: end;
  gap: 6px;
}

.plan-price strong {
  font-size: 2.5rem;
  line-height: 1;
}

.plan-price span {
  color: var(--muted);
}

.plan-card ul {
  list-style: none;
  padding: 0;
  margin: 22px 0;
}

.plan-card li {
  padding: 9px 0;
  color: var(--muted);
  border-bottom: 1px solid var(--line);
}

.plan-card li:last-child {
  border-bottom: none;
}

.plan-card .primary-btn,
.plan-card .secondary-btn {
  width: 100%;
}

.steps-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.step-card {
  padding: 28px 22px;
}

.step-number {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(80, 227, 194, 0.12);
  color: var(--brand);
  font-weight: 800;
  margin-bottom: 18px;
}

.step-card h3 {
  margin: 0 0 10px;
}

.step-card p,
.faq-item p,
.footer p {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
}

.dashboard-shell {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  align-items: flex-start;
}

.dashboard-sidebar {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px;
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.profile-card h3 {
  margin: 0 0 4px;
}

.profile-card p {
  margin: 0;
  color: var(--muted);
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0 0 22px;
}

.sidebar-list li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
}

.sidebar-list strong {
  color: var(--text);
}

.dashboard-main {
  display: grid;
  gap: 20px;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.mini-stat {
  padding: 20px 18px;
}

.mini-stat span {
  color: var(--muted);
  display: block;
  margin-bottom: 8px;
}

.mini-stat strong {
  font-size: 1.8rem;
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.panel-card {
  padding: 20px;
}

.panel-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.panel-card-header h3 {
  margin: 0;
}

.stack-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

input,
select {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.8);
  color: var(--text);
  outline: none;
  padding: 12px 14px;
}

input::placeholder {
  color: rgba(167, 180, 209, 0.8);
}

.bot-list {
  display: grid;
  gap: 14px;
}

.bot-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(148, 163, 184, 0.04);
}

.bot-meta {
  display: flex;
  align-items: center;
  gap: 14px;
}

.bot-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  background: rgba(34, 197, 94, 0.12);
  color: var(--brand);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.bot-info h4 {
  margin: 0 0 4px;
}

.bot-info p {
  margin: 0;
  color: var(--muted);
}

.admin-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.admin-stat-box {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(148, 163, 184, 0.04);
}

.admin-stat-box span {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.admin-stat-box strong {
  font-size: 1.5rem;
}

.faq-list {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.faq-item {
  padding: 22px;
}

.faq-item h3 {
  margin-top: 0;
  margin-bottom: 12px;
}

.footer {
  padding: 34px 0 48px;
  border-top: 1px solid var(--line);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-brand {
  margin-bottom: 10px;
}

.footer-links {
  display: flex;
  gap: 22px;
  color: var(--muted);
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.7);
  display: grid;
  place-items: center;
  z-index: 100;
}

.modal-card {
  position: relative;
  width: min(460px, calc(100% - 24px));
  background: rgba(15, 23, 42, 0.98);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 22px 22px;
  box-shadow: var(--shadow);
}

.close-btn {
  position: absolute;
  right: 16px;
  top: 14px;
  width: 36px;
  height: 36px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  font-size: 1.5rem;
}

.modal-header {
  margin-bottom: 18px;
  font-size: 1.5rem;
  font-weight: 700;
}

.hidden {
  display: none !important;
}

.hidden-on-login {
  display: none;
}

@media (max-width: 980px) {
  .hero-grid,
  .dashboard-shell,
  .panel-grid,
  .feature-grid,
  .plans-grid,
  .steps-grid,
  .faq-list {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .nav {
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    padding: 10px 0;
  }

  .hero {
    padding-top: 40px;
  }
}

@media (max-width: 640px) {
  .hero-copy h1 {
    letter-spacing: -0.05em;
  }

  .stats-row,
  .admin-stats {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
