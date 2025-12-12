document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const overlay = document.getElementById('overlay');
    const themeToggle = document.getElementById('themeToggle');
    
    // Toggle Mobile Sidebar
    if (sidebarCollapse) {
        sidebarCollapse.addEventListener('click', function () {
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

    // Active Link Logic
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('#sidebar ul li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active-link');
            const parentCollapse = link.closest('.collapse');
            if(parentCollapse){
                parentCollapse.classList.add('show');
                const dropdownTrigger = document.querySelector(`[data-bs-target="#${parentCollapse.id}"]`);
                if(dropdownTrigger) dropdownTrigger.classList.add('active-link');
            }
        }
    });

    // Dark Mode Logic
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
        const text = themeToggle.querySelector('span');
        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun';
            text.textContent = ' Chế độ sáng';
        } else {
            icon.className = 'fa-solid fa-moon';
            text.textContent = ' Chế độ tối';
        }
    }
});