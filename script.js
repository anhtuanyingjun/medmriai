// Dark Mode Toggle (giữ nguyên)
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

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

    // Sidebar Toggle
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('closed');
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('active');
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});