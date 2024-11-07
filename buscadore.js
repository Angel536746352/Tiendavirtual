ddocument.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('.galeria .item');
    
    items.forEach(item => {
        const imgAlt = item.querySelector('img').getAttribute('alt').toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();

        // Si el término de búsqueda se encuentra en el alt de la imagen o en la descripción
        if (imgAlt.includes(query) || description.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
