//incorporo input de busqueda
let filtroxNombre= document.getElementById('filtroxNombre');
filtroxNombre.onkeyup= () => {
    let valor= filtroxNombre.value.toUpperCase();        
    let filtradosNombre = productos.filter(producto => producto.nombre.includes(valor));        
    $("#divDinamico").empty();
    productosUI(filtradosNombre,"#divDinamico");
}   


//select de categorias
function selectIU(lista, selector) {
    $(selector).empty();
    for (const categoria of lista) {
        $(selector).append(`<option>${categoria}</option>`);
    }
    $(selector).prepend(`<option selected>TODOS</option>`);
}
function buscarCategoria() {
    let valor= this.value;
    $("#divDinamico").fadeOut(400, function(){
        if(valor != "TODOS"){
            let filtrados= productos.filter(producto =>producto.categoria == valor)
            productosUI(filtrados,"#divDinamico");
        }else{
            productosUI(productos,"#divDinamico");
        }       
    }).fadeIn(400);
}
