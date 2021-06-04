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

let gerente = new Gerente('Christian', 4500, 'Sistemas');
console.log(gerente.obtenerDetalles());