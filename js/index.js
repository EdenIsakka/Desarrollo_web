//Tipos de delcaraciones de variables
//const, var, let

//tipos de datos
//string, number, undefined,null, boolean, simbol, object, "Array"


const edad = 80;
const edad2 = "80";

const mensaje = "Hola Mundo";
const es_cliente = true;

//Impresion
console.log("Saludos Universo")


//typeof

console.log("typeof edad" + typeof edad)
//Doble y triple en javascript
console.log("80==80" , 80==80)
console.log("edad==edad2" , edad==edad2) //valor
console.log("edad===edad2" , edad===edad2) // Valor y tipo de dato


//concatenacion
console.log("concatenacion");
const nombre="Juan"
const apellido="Perez"
console.log(nombre + "" + apellido);
console.log(`Nombre completo: ${nombre} ${apellido}`);
const num1 = 1
let num2 = "1"
console.log(num1 + num2);
num2 = 1
console.log(num1 + num2);

//conversiones 

//funciones
//Funcion Clasica
function sumar(num1, num2) {
    return num1 + num2;
}
//Arrow Function
const restar = (num1, num2) => {
    return num1-num2
}

//objetos
//JavaScript Object Notation (JSON)
const estudiante = {
    nombre:"CARLOS",
    apellido: "",
    nombreCompleto:()=>{
        return `${this.nombre} ${this.apellido}`
    }
}


//Array
const MyArray=["Sandra", 23, true, estudiante, () => { returns
}]





