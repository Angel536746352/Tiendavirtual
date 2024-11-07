document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajuste de posición para compensar el menú fijo
                behavior: 'smooth'
            });
        });
    });
});
