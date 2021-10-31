
selectIU(categorias,"#selectCategoria");

$("#selectCategoria").on("change", buscarCategoria);

$(document).ready(function () { 
    console.log("dom listo");
    Toastify({
        text: "¡Gracias por visitarnos!",
        className: "info",
        style: {
            background: "#4F8C71",
        }
    }).showToast();
    recuperar();
})

//Utilizo una llamada asincrona para traer los datos desde un JSON
$.get("../assets/data/productos.json", function (respuesta, estado) {
    console.log(respuesta);
    //Pregunto si el estado de la operacion fue exitoso
    if(estado == "success"){
        //Recorro el array respuesta y lo transformo a objetos de tipo "producto"
        for (const objeto of respuesta) { 
            //Guardo los objetos "traducidos" en el array productos           
            productos.push( new Producto(objeto.id, objeto.nombre, objeto.descrip, objeto.precio, objeto.img, objeto.alt, objeto.cantidad, objeto.categoria) );
        }  
        //GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
        productosUI(productos,'#divDinamico');
    }else{
        console.log('Los datos no se cargaron correctamente');
    }  
    
});