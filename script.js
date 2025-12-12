document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarCollapseMobile = document.getElementById('sidebarCollapse');
    const sidebarToggleDesktop = document.getElementById('sidebarToggleDesktop');
    const overlay = document.getElementById('overlay');
    const themeToggle = document.getElementById('themeToggle');
    
    // 1. Mobile Toggle
    if (sidebarCollapseMobile) {
        sidebarCollapseMobile.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', function () {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // 2. Desktop Collapse
    if (sidebarToggleDesktop) {
        sidebarToggleDesktop.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
        });
    }

    // 3. Active Link Highlight
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('#sidebar ul li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active-link');
        }
    });

    // 4. Dark Mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function (e) {
            e.preventDefault();
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    }
});