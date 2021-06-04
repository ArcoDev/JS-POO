//clase padre
class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles() {
        return `Empleado: \n Nombre: ${this.nombre}, Sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    //sobre escritura de la funcion obtenerDetalles
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()} Depto: ${this.departamento}`;
    }
}
/* Con polimorfismo, en una linea de coodigoo se pueden llamar en multiples formas a las clases*/
function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
}
let emplado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Christian', 4500, 'Sistemas');

imprimir(emplado1);
imprimir(gerente1);
