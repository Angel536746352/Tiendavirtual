document.addEventListener('DOMContentLoaded', function() {
    const editarButton = document.getElementById('editarPerfil');
    const guardarButton = document.getElementById('guardarPerfil');
    const inputs = document.querySelectorAll('.perfil-info input');
    const fotoInput = document.getElementById('fotoInput');

    editarButton.addEventListener('click', function() {
        inputs.forEach(input => input.removeAttribute('readonly'));
        fotoInput.disabled = false;

        editarButton.style.display = 'none';
        guardarButton.style.display = 'inline-block';
    });

    guardarButton.addEventListener('click', function() {
        inputs.forEach(input => input.setAttribute('readonly', true));
        fotoInput.disabled = true;

        editarButton.style.display = 'inline-block';
        guardarButton.style.display = 'none';

        // Aquí puedes agregar código para guardar la información en el almacenamiento local o enviarla a un servidor
    });
});
