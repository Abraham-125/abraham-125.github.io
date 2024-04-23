


function renderizarProductos() {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <h3>${donas[index].nombre}</h3>
            <p>Precio: $${donas[index].descripcion}</p>
            <button onclick="agregarAlCarrito(${donas[index].clasica})">Agregar al Carrito</button>
        `;
        productosDiv.appendChild(productoDiv);
    });
}