// Datos de los productos (pueden ser cargados desde una base de datos)




const donas=  [
    {
        id:1,
        nombre: 'FRUTILLA ARCOIRIS',
        descripcion: 'cobertura de arcoiris',
        urlImagen: 'dona_1.png',
        relleno:false,
        premium:false,
        clasica: true,
        shell: false,
        anillo: true,
        munchkin: false,
        temporal: false
    },
    {
        id:2,
        nombre: 'VAINILLA ARCOIRIS',
        descripcion: 'cobertura de vainilla y chispitas de colores',
        urlImagen: 'dona_2.png',
        relleno:false,
        premium:false,
        clasica: true,
        shell: false,
        anillo: true,
        munchkin: false,
        temporal: false
    },
    {
        id:3,
        nombre: 'CHOCOLATE ARCOIRIS',
        descripcion: 'cobertura de chocolate con chispitas de colores',
        urlImagen: 'dona_3.png',
        relleno:false,
        premium:false,
        clasica: true,
        shell: false,
        anillo: true,
        munchkin: false,
        temporal: false
    },
    {
        id:4,
        nombre: 'BOSTON MANJAR',
        descripcion: 'cobertura de chocolate con relleno de manjar',
        urlImagen: 'dona_10.png',
        relleno:true,
        premium:false,
        clasica: true,
        shell: true,
        anillo: false,
        munchkin: false,
        temporal: false
    },
    {
        id:5,
        nombre: 'MANJAR AZUCARADO',
        descripcion: 'cubierta con azucar flor y con relleno de manjar',
        urlImagen: 'dona_11.png',
        relleno:true,
        premium:false,
        clasica: true,
        shell: true,
        anillo: false,
        munchkin: false,
        temporal: false
    },
    {
        id:6,
        nombre: 'MUNCHKINS',
        descripcion: 'masa de dona, rellena con manjar y empolvadas con azucar flor',
        urlImagen: 'munchkins.png',
        relleno:true,
        premium:false,
        clasica: false,
        shell: false,
        anillo: false,
        munchkin: true,
        temporal: false
    },
    {
        id:7,
        nombre: 'CORAZON FRUTILLA',
        descripcion: 'Dona de frutilla con forma de corazon',
        urlImagen: 'dona_13.png',
        relleno:true,
        premium:false,
        clasica: false,
        shell: true,
        anillo: false,
        munchkin: false,
        temporal: true
    },
    {
        id:8,
        nombre: 'lOCKING DONUT',
        descripcion: 'cobertura de arcoiris',
        urlImagen: 'dona_4.png',
        relleno:false,
        premium:false,
        clasica: true,
        shell: false,
        anillo: true,
        munchkin: false,
        temporal: false
    },
    {
        id:9,
        nombre: 'Doble boston manjar',
        descripcion: 'cobertura de arcoiris',
        urlImagen: 'dona_12.png',
        relleno:true,
        premium:true,
        clasica: false,
        shell: false,
        anillo: false,
        munchkin: false,
        temporal: false
    },
    {
        id:10,
        nombre: 'FRUTILLA ARCOIRIS',
        descripcion: 'cobertura de arcoiris',
        urlImagen: 'dona_6.png',
        relleno:false,
        premium:false,
        clasica: true,
        shell: false,
        anillo: true,
        munchkin: false,
        temporal: false
    },
    {
        id:11,
        nombre: 'FRUTILLA ARCOIRIS',
        descripcion: 'cobertura de arcoiris',
        urlImagen: 'dona_7.png',
        relleno:false,
        premium:false,
        clasica: true,
        shell: false,
        anillo: true,
        munchkin: false,
        temporal: false
    },
    {
        id:11,
        nombre: 'FRUTILLA ARCOIRIS',
        descripcion: 'cobertura de arcoiris',
        urlImagen: 'dona_8.png',
        relleno:false,
        premium:false,
        clasica: true,
        shell: false,
        anillo: true,
        munchkin: false,
        temporal: false
    },
    {
        id:11,
        nombre: 'FRUTILLA ARCOIRIS',
        descripcion: 'cobertura de arcoiris',
        urlImagen: 'dona_9.png',
        relleno:false,
        premium:false,
        clasica: true,
        shell: false,
        anillo: true,
        munchkin: false,
        temporal: false
    },
    {
        id:11,
        nombre: 'FRUTILLA ARCOIRIS',
        descripcion: 'cobertura de arcoiris',
        urlImagen: 'dona_9.png',
        relleno:false,
        premium:false,
        clasica: true,
        shell: false,
        anillo: true,
        munchkin: false,
        temporal: false
    },
]

function renderizarProductos() {
    const productosDiv = document.getElementById('donasContainer');
    productosDiv.innerHTML = '';
    donas.forEach(donas => {
        const productoHTML = `
        <div class="col-6 col-sm-3"  style="min-height: 192px; padding:0; margin:0; border:">
        <div class="container-fluid hov-pad">
            <button onclick="agregarAlCarrito(${donas.id})" style="border:0px; background-color:transparent"><img class="img-dona" src="${donas.urlImagen}" width="85%">
            <p class="titulo-dona">${donas.nombre}</p></button>
            </div>
        </div>
        `;
        productosDiv.innerHTML += productoHTML;
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = donas.find(p => p.id === id);
    carrito.push(producto);
    renderizarCarrito();
    mostrarToast();
}

// Función para renderizar el carrito
function renderizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    carrito.forEach(donas => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <div class="container-fluid d-flex align-items-center" style="background-color:white; border-radius:15px; margin:10px">
                <div class="row">
                    <div class="col-1 col-sm-1">
                        <img style="margin-top:20px" src="${donas.urlImagen}" width="400%">
                    </div>
                    <div class="col-4 col-sm-4">

                        <p style="font-size:15px;margin-top:8px;margin-top:20px">${donas.nombre}</p>
                    </div>
                    <div class="col-2 col-sm-2">

                        <button style="border:0px; background-color:transparent; margin-top:20px"><img src="src/btn-izq.png"></button>
                    </div>
                    <div class="col-1 col-sm-1">
                        <p style="margin-top:20px">1</p>
                    </div>
                    <div class="col-2 col-sm-2">

                        <button style="border:0px; background-color:transparent;margin-top:20px "><img src="src/btn-der.png"></button>
                    </div>
                    
                    <div class="col-2 col-sm-2">
                        <button style="border:0px; background-color:transparent;margin-top:20px "><img src="src/btn-cerrar.png"></button>
                    </div>
                </div>
            </div>


        `;
        carritoDiv.appendChild(productoDiv);
    });
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}

// Array para almacenar los productos en el carrito
let carrito = [];

// Evento para vaciar el carrito
document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);

// Llamar a la función para renderizar los productos al cargar la página
renderizarProductos();

function mostrarToast() {
    const toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();
}

// FILTROS

document.addEventListener("DOMContentLoaded", function() {
    const donasContainer = document.getElementById("donasContainer");
    const searchInput = document.getElementById("searchInput");

    // Función para mostrar las donas según los filtros seleccionados y la búsqueda por nombre
    function mostrarDonas() {
        donasContainer.innerHTML = "";

        const filtroAnillos = document.getElementById("filtroAnillos").checked;
        const filtroShell = document.getElementById("filtroShell").checked;
        const filtroPremium = document.getElementById("filtroPremium").checked;
        const filtroMunchkins = document.getElementById("filtroMunchkins").checked;
        const filtroTemporal = document.getElementById("filtroTemporal").checked;
        const searchTerm = searchInput.value.toLowerCase(); // Obtener el término de búsqueda en minúsculas

        const donasFiltradas = donas.filter(dona =>
            (!filtroAnillos || dona.anillo) &&
            (!filtroShell || dona.shell) &&
            (!filtroPremium || dona.premium) &&
            (!filtroMunchkins || dona.munchkin) &&
            (!filtroTemporal || dona.temporal) &&
            dona.nombre.toLowerCase().includes(searchTerm) // Filtrar por nombre
        );

        // Renderizar solo las donas que pasan el filtro
        donasFiltradas.forEach(dona => {
            const productoHTML = `
                <div class="col-6 col-sm-3"  style="min-height: 192px; padding:0; margin:0; border:">
                    <div class="container-fluid hov-pad">
                        <button onclick="agregarAlCarrito(${dona.id})" style="border:0px; background-color:transparent">
                            <img class="img-dona" src="${dona.urlImagen}" width="85%">
                            <p class="titulo-dona">${dona.nombre}</p>
                        </button>
                    </div>
                </div>
            `;
            donasContainer.innerHTML += productoHTML;
        });
    }

    // Escuchar cambios en los checkboxes y en el campo de búsqueda para actualizar los resultados
    const checkboxes = document.querySelectorAll(".form-check-input");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", mostrarDonas);
    });
    searchInput.addEventListener("input", mostrarDonas);

    // Mostrar las donas inicialmente
    mostrarDonas();
});
