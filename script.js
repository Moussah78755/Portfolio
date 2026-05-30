const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

function toggleTheme() {
  const current = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = current;
  if (current === 'light') {
    root.style.setProperty('--bg', '#f8fafc');
    root.style.setProperty('--surface', '#ffffff');
    root.style.setProperty('--surface-alt', '#f1f5f9');
    root.style.setProperty('--text', '#0f172a');
    root.style.setProperty('--muted', '#64748b');
    root.style.setProperty('--primary', '#0ea5e9');
    root.style.setProperty('--primary-strong', '#0284c7');
    root.style.setProperty('--border', 'rgba(148, 163, 184, 0.18)');
    root.style.setProperty('--shadow', '0 30px 80px rgba(15, 23, 42, 0.08)');
    themeToggle.textContent = '🌙';
  } else {
    root.style.setProperty('--bg', '#0f172a');
    root.style.setProperty('--surface', '#111827');
    root.style.setProperty('--surface-alt', '#1e293b');
    root.style.setProperty('--text', '#e2e8f0');
    root.style.setProperty('--muted', '#94a3b8');
    root.style.setProperty('--primary', '#38bdf8');
    root.style.setProperty('--primary-strong', '#0ea5e9');
    root.style.setProperty('--border', 'rgba(148, 163, 184, 0.18)');
    root.style.setProperty('--shadow', '0 30px 80px rgba(15, 23, 42, 0.35)');
    themeToggle.textContent = '☀️';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

window.addEventListener('load', () => {
  root.dataset.theme = 'dark';
});
