    function toggleTheme() {
      const body = document.body;
      const icon = document.getElementById('theme-icon');
      const isDark = body.classList.toggle('dark-theme');
      icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
  