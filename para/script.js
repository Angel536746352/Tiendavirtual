function actualizarDatos() {
    const select = document.getElementById('articulo');
    const cantidad = document.getElementById('cantidad').value;
    const nombreArticulo = select.value;
    const precioUnitario = parseFloat(select.options[select.selectedIndex].getAttribute('data-precio'));

    document.getElementById('nombre-articulo').textContent = nombreArticulo || 'N/A';
    document.getElementById('precio-unitario').textContent = precioUnitario.toFixed(2);
    document.getElementById('cantidad-articulos').textContent = cantidad;

    const total = precioUnitario * cantidad;
    document.getElementById('total').textContent = total.toFixed(2);
}

function hacerPedido() {
    const articulo = document.getElementById('nombre-articulo').textContent;
    const cantidad = document.getElementById('cantidad').value;
    const total = document.getElementById('total').textContent;

    const mensaje = `Hola, quiero pedir ${cantidad} de ${articulo}. Total: $${total}.`;
    const telefonoVendedor = '50497879281'; // Reemplaza con el número real del vendedor
    const whatsappUrl = `https://wa.me/${telefonoVendedor}?text=${encodeURIComponent(message)}`;
 
    window.open(whatsappUrl, '_blank');

}
