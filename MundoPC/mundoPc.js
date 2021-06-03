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
        return `Monotor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}"]`;
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

