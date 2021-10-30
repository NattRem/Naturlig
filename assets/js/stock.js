//DECLARACIÓN DE CLASE PRODUCTO
class Producto {
    constructor(id, nombre, descrip, precio, img, alt, cantidad, categoria) {
            this.id = parseInt(id);
            this.nombre = nombre;
            this.descrip= descrip;
            this.precio = parseFloat(precio);
            this.img = img;
            this.alt= alt;
            this.cantidad=cantidad;
            this.categoria=categoria;
    }
}

const productos=[];
const categorias= ["Cuidado Corporal", "Cuidado Capilar", "Cuidado Facial", "Higiene Bucal", "Aromáticos"];
