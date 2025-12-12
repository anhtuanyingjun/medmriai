// script.js
// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Kiểm tra trạng thái dark mode từ localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    });

    // Sidebar Toggle - Sửa để dùng 'active' và 'closed'
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const content = document.querySelector('.content');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        sidebar.classList.toggle('closed');
        if (window.innerWidth <= 768) {
            if (sidebar.classList.contains('active')) {
                content.style.opacity = '0.5';
                content.style.pointerEvents = 'none';
            } else {
                content.style.opacity = '1';
                content.style.pointerEvents = 'auto';
            }
        }
    });

    // Smooth scroll cho links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});