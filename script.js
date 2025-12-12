document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const overlay = document.getElementById('overlay');
    const themeToggle = document.getElementById('themeToggle');
    
    // 1. Sidebar Toggle (Mobile)
    if (sidebarCollapse) {
        sidebarCollapse.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }

    // Đóng sidebar khi click vào overlay (vùng tối bên ngoài)
    if (overlay) {
        overlay.addEventListener('click', function () {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // 2. Active Link Highlighting
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('#sidebar ul li a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Logic kiểm tra trang hiện tại
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active-link');
            // Mở dropdown nếu link nằm trong dropdown
            const parentCollapse = link.closest('.collapse');
            if(parentCollapse){
                parentCollapse.classList.add('show');
                const dropdownTrigger = document.querySelector(`[data-bs-target="#${parentCollapse.id}"]`);
                if(dropdownTrigger) dropdownTrigger.classList.add('active-link');
            }
        }
    });

    // 3. Dark Mode Logic (Sử dụng Bootstrap 5.3 API)
    // Kiểm tra trạng thái đã lưu
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function (e) {
            e.preventDefault(); // Ngăn thẻ a chuyển trang
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Cập nhật icon và text
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        
        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun'; // Icon mặt trời cho chế độ tối
            text.textContent = ' Chế độ sáng';
        } else {
            icon.className = 'fa-solid fa-moon'; // Icon trăng cho chế độ sáng
            text.textContent = ' Chế độ tối';
        }
    }
});