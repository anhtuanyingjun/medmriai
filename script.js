document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarCollapseMobile = document.getElementById('sidebarCollapse'); // Nút 3 gạch trên Mobile (Top bar)
    const sidebarToggleDesktop = document.getElementById('sidebarToggleDesktop'); // Nút 3 gạch mới trong Sidebar
    const overlay = document.getElementById('overlay');
    const themeToggle = document.getElementById('themeToggle');
    
    // 1. Logic Toggle cho Mobile (Trượt ra)
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

    // 2. Logic Toggle cho Desktop (Thu nhỏ/Phóng to)
    if (sidebarToggleDesktop) {
        sidebarToggleDesktop.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
        });
    }

    // 3. Active Link Logic
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('#sidebar ul li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active-link');
            // Xử lý dropdown
            const parentCollapse = link.closest('.collapse');
            if(parentCollapse){
                parentCollapse.classList.add('show');
                const dropdownTrigger = document.querySelector(`[data-bs-target="#${parentCollapse.id}"]`);
                if(dropdownTrigger) dropdownTrigger.classList.add('active-link');
            }
        }
    });

    // 4. Dark Mode Logic
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function (e) {
            e.preventDefault(); // Nút button không cần preventDefault link, nhưng giữ cho chắc
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
            themeToggle.setAttribute('title', 'Chế độ sáng');
        } else {
            icon.className = 'fa-solid fa-moon';
            themeToggle.setAttribute('title', 'Chế độ tối');
        }
    }
});