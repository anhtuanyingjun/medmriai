document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const sidebarCollapse = document.getElementById('sidebarCollapse'); // Mobile hamburger
    const sidebarCollapseDesktop = document.getElementById('sidebarCollapseDesktop'); // Desktop toggle inside sidebar (optional)
    const themeToggle = document.getElementById('themeToggle');
    const currentPath = window.location.pathname.split("/").pop();

    // 1. Sidebar Toggle Logic
    // Logic: Mobile default hidden, Desktop default visible
    // We use a CSS class '.active' to toggle state based on screen size logic in CSS
    
    // Toggle button event
    if(sidebarCollapse) {
        sidebarCollapse.addEventListener('click', function () {
            sidebar.classList.toggle('active');
        });
    }

    // 2. Active Link Highlighting
    const navLinks = document.querySelectorAll('#sidebar ul li a');
    navLinks.forEach(link => {
        // Get the href attribute
        const href = link.getAttribute('href');
        // Check if current page matches href
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active-link');
            // Check if it is inside a dropdown
            const parentCollapse = link.closest('.collapse');
            if(parentCollapse){
                parentCollapse.classList.add('show');
                // Highlight the parent dropdown trigger
                const dropdownTrigger = document.querySelector(`[data-bs-target="#${parentCollapse.id}"]`);
                if(dropdownTrigger) dropdownTrigger.classList.add('active-link');
            }
        }
    });

    // 3. Dark Mode Logic
    const currentTheme = localStorage.getItem('theme');
    
    // Apply saved theme
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateIcon(currentTheme);
    }

    themeToggle.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent link jump
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateIcon(theme);
    });

    function updateIcon(theme) {
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            text.textContent = ' Chế độ sáng';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            text.textContent = ' Chế độ tối';
        }
    }
});