(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const readSavedTheme = () => {
    try {
      return localStorage.getItem('theme');
    } catch (error) {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      // Theme switching still works when browser storage is unavailable.
    }
  };

  const applyTheme = (theme, persist = false) => {
    const isDark = theme === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';

    if (toggle) {
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.setAttribute('aria-label', isDark ? '切换为浅色主题' : '切换为深色主题');
      toggle.title = isDark ? '切换为浅色主题' : '切换为深色主题';
    }

    if (themeColor) {
      themeColor.content = isDark ? '#101113' : '#111214';
    }

    if (persist) {
      saveTheme(isDark ? 'dark' : 'light');
    }
  };

  const savedTheme = readSavedTheme();
  applyTheme(savedTheme || (media.matches ? 'dark' : 'light'));

  toggle?.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });

  media.addEventListener?.('change', (event) => {
    if (!readSavedTheme()) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  });
})();
