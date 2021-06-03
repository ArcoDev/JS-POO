/* Orden de las clases
    1.- DispositivoEntrada
    2.- Raton
    3.- Teclado
    4.- Monitor
    5.- Computadora
    6.- Orden
*/
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
}
//Raton es hijo de la clase DispositivoEntrada
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Raton: [idRaton: ${this._idRaton}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }    
}

//Teclado es hijo de la clse DispositivoEntrada
class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
        return `Teclado: [idTeclado: ${this._idTeclado}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}
class Monitor {
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor() {
        return this._idMonitor;
    }
    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}"]`;
    }
}
class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden() {
        return this.idOrden;
    }
    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }
    mostrarOrden() {
        let computadorasOrden = '';
        for(let computadora of this._computadoras) {
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

//Mostrar en consola el objeto creado
let raton1 = new Raton('USB', 'HP');
let raton2 = new Raton('Bluetooh', 'Dell');
raton2.marca = 'HP';
console.log(raton1.toString());
console.log(raton2.toString());
//Objetos del Teclado
let teclado1 = new Teclado('Bluetooh', 'Gamer');
let teclado2 = new Teclado('USB', 'DELL');
console.log(teclado1.toString());
console.log(teclado2.toString());
//Objetos del Monitor
let monitor1 = new Monitor('HP',  15);
let monitor2 = new Monitor('DELL', 24);
console.log(monitor1.toString());
console.log(monitor2.toString());

//Obejto computadora
let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
let computadora2 = new Computadora('HP', monitor2, raton2, teclado2);
console.log(computadora1.toString());

//Objeto orden
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
orden2.mostrarOrden();


