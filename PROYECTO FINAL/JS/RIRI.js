// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "ACETOMINOFEN",
        imagen: "../IMG 2/ACETAMINOFEN.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 10000
    },
    {
        id: "abrigo-02",
        titulo: "ADVIL",
        imagen: "../IMG 2/advil.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 15000
    },
    {
        id: "abrigo-03",
        titulo: "BUSCAPINA",
        imagen: "../IMG 2/buscapina.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 6500
    },
    {
        id: "abrigo-04",
        titulo: "CALMIDON",
        imagen: "../IMG 2/calmidol.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 75000
    },
    {
        id: "abrigo-05",
        titulo: "DOLEX",
        imagen: "../IMG 2/dolex.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 10000
    },
    {
        id: "abrigo-05",
        titulo: "FINASTERIDE",
        imagen: "../IMG 2/finasteride.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 80000
    },
    {
        id: "abrigo-05",
        titulo: "IBUFLASH",
        imagen: "../IMG 2/ibuflash.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 70000
    },
    {
        id: "abrigo-05",
        titulo: "LUMBAL",
        imagen: "../IMG 2/lumbal.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio:20000
    },
    {
        id: "abrigo-05",
        titulo: "SILDENAFILO",
        imagen: "../IMG 2/sidelnafil.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 880000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "ALCOHOL",
        imagen: "../IMG 2/alcohol.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 45000
    },
    {
        id: "camiseta-02",
        titulo: "ALGODON",
        imagen: "../IMG 2/algodon.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 56000
    },
    {
        id: "camiseta-03",
        titulo: "AGUA OXIGENADA",
        imagen: "../IMG 2/aua oxigenada.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 35000
    },
    {
        id: "camiseta-04",
        titulo: "COMPRESA",
        imagen: "../IMG 2/hot-cold-therapy-nexcare-colombia-lh000003251.avif",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 87000
    },
    {
        id: "camiseta-05",
        titulo: "CURAS",
        imagen: "../IMG 2/curas.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 95000
    },

    {
        id: "camiseta-07",
        titulo: "GASA",
        imagen: "../IMG 2/gasa.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 45000
    },
    {
        id: "camiseta-08",
        titulo: "ISODINE",
        imagen: "../IMG 2/isodine.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 25000
    },
    {
        id: "camiseta-08",
        titulo: "JERINGA",
        imagen: "../IMG 2/JERINGAS-DESECHABLES-3-PARTES.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 45000
    },
    {
        id: "camiseta-08",
        titulo: "CINTA MICROPORE",
        imagen: "../IMG 2/micropore.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 65000
    },
    {
        id: "camiseta-08",
        titulo: "TAPABOCAS",
        imagen: "../IMG 2/tapabocas.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 5000
    },
    // Pantalones
    {
        id: "pantalon-02",
        titulo: "ACEITE JOHNSONS",
        imagen: "../IMG 2/aceite.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 50000
    },
    {
        id: "pantalon-03",
        titulo: "LECHE 1-2 AÑOS",
        imagen: "../IMG 2/alimento formula 1 a 2 años.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 30000
    },
    {
        id: "pantalon-04",
        titulo: "LECHE 0 -12 MESES",
        imagen: "../IMG 2/alimento lacteo.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 150000
    },
    {
        id: "pantalon-05",
        titulo: "COMPOTAS",
        imagen: "../IMG 2/compotas.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 58000
    },
    {
        id: "pantalon-05",
        titulo: "COPITOS",
        imagen: "../IMG 2/copitos.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 5000
    },
    {
        id: "pantalon-05",
        titulo: "CREMA N°4",
        imagen: "../IMG 2/crema anti pañalitis.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio:100000
    },
    {
        id: "pantalon-05",
        titulo: "JABON LIQUIDO",
        imagen: "../IMG 2/javon liquido.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 50000
    },
    {
        id: "pantalon-05",
        titulo: "PAÑALES X30",
        imagen: "../IMG 2/pañales.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 95000
    },
    {
        id: "pantalon-05",
        titulo: "PAÑITOS HUMEDOS",
        imagen: "../IMG 2/pañitos humedos.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 45000
    },
    {
        id: "pantalon-05",
        titulo: "SHAMPOO JOHMSONS",
        imagen: "../IMG 2/shampoo.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 85000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
