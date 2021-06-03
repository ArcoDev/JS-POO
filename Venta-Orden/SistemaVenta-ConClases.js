//clase producto 
class Producto {
    static contadorProductos = 0;
    
    //constructores
    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    //metodos
    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }
    set precio(precio) {
       return this._precio = precio;
    }
    toString() {
        //template literas
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}
//clase orden
class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }
    constructor() {
        //Agregamos el arreglo de productos con la agregacion de relacion (una orden puede tener multiples productos asociados)
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }
    get idOrden() {
        return this._idOrden;
    }
    //Metodo para agrgar el producto al arreglo
    agregarProducto(producto) {
        if(this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
            //Otra manera de agregar los productos
            //this._productos[this._contadorProductosAgregados++] = producto;

        } else {
            console.log('No se pueden agregar mas productos');
        }
    }
    //Calcular el total de el precio que tiene los productos y agregarlos a la orden
    calcularTotal() {
        let totalVenta = 0;
        //Iterar el arreglo
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    //Mostrar la orden fianl
    mostrarOrden() {
        let productosOrden = '';
        for(let producto of this._productos) {
            productosOrden += '\n{ ' + producto.toString() + ' } ';
        }
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()} \n Productos: ${productosOrden}`);
    }
}

//Pasar informacion a la calse producto
let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);
let producto3 = new Producto('Gorra', 50);

/*console.log(producto1.toString());
console.log(producto2.toString());*/
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();
