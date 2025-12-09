// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Kiểm tra trạng thái dark mode từ localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Smooth scroll cho links (nếu có anchors)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});