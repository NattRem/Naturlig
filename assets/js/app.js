//array de los productos seleccionados
let carritoDeCompras = []


const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');



//Función para crear y mostras las cards de los productos
function productosUI(productos, id){
    $(id).empty();
    for (const producto of productos) {
    $(id).append(`<div class="card TarjetaProducto" style="width: 18rem;">
                    <div>
                        <h3 class="mt-4">${producto.nombre}</h3>
                        <hr>
                        <img ${producto.img} ${producto.alt} class="imgFluid">
                        <h5>${producto.descrip}</h5>
                        <hr>
                        <h4>$${producto.precio}</h4>
                        <h5><strong>${producto.categoria}</strong><h5>
                        <hr>
                    </div>
                    <div>
                        <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary mb-4 btn-compra"> Agregar al carrito </button>    
                    </div>
                </div>`);
    }
};


//agrego los productos al modal-carrito, cuando se repiten aunmenta la cantidad
function agregarAlCarrito(id){
    let repetido = carritoDeCompras.find(productoRep => productoRep.id == id)
    if (repetido) {
        repetido.cantidad = repetido.cantidad + 1;
        $(`#cantidad${repetido.id}`).html(`X ${repetido.cantidad}`)
    }else{
        let productoAgregar = productos.find(x => x.id == id);
        carritoDeCompras.push(productoAgregar);
        
        productoAgregar.cantidad = 1;

        actualizarCarrito();

        $("#carrito-contenedor").append(`<div class ="productoEnCarrito">
                        <p class="m-2">${productoAgregar.nombre}|</p>
                        <p class="m-2"> $<strong>${productoAgregar.precio}</strong>|</p>
                        <p id=cantidad${productoAgregar.id} class="m-2">  X${productoAgregar.cantidad}  |</p>
                        <button id =eliminar${productoAgregar.id} class="boton-eliminar m-2"><img class="iconCerrar" src= "../assets/img/iconos/cruz.png" alt="Icono Cerrar/Eliminar"</button>
                    </div>`)

            Toastify({
                text: "Agregado al carrito",
                className: "info",
                style: {
                    background: "#4F8C71",
                }
            }).showToast();


            //boton para eliminar un producto
        $(`#eliminar${productoAgregar.id}`).click( function (){
            $(this).parent().remove();
            carritoDeCompras = carritoDeCompras.filter(el => el.id != productoAgregar.id);
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
            actualizarCarrito();
            Toastify({
                text: "Producto eliminado",
                className: "info",
                style: {
                    background: "#AEECCF",
                }
            }).showToast();            
        });
    }
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));

    actualizarCarrito();
}


//funcion para guardar los productos en el LocalStorage, y mostrarlos en el carrito denuevo
function recuperar() {
    let recuperado = JSON.parse(localStorage.getItem('carrito')); 
    if(recuperado){
        recuperado.forEach(el => {
            agregarAlCarrito(el.id);
        });
    }
}


//Funcion para actualizar el carrito, suma la cantidad de productos y el precio total de la compra
function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.cantidad, 0);
    precioTotal.innerText = carritoDeCompras.reduce((acc, el)=> acc + (el.precio * el.cantidad), 0);
};



