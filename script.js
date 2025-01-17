console.log("Tarea 1 INGENERÍA DE SOFTWARE 2")

console.log('Ejemplo para datos tipo STRING')
let cadena = 'Este es un ejemplo para el tipo de dato string'

// 1. Convertir toda la cadena a mayúsculas usando toUpperCase()
let mayusculas = cadena.toUpperCase();
console.log(mayusculas); // IMPRIME "ESTE ES UN EJEMPLO PARA EL TIPO DE DATO STRING"

// 2. Reemplazar la palabra "string" por "cadena" usando replace()
let reemplazar = cadena.replace('string', 'cadena');
console.log(reemplazar); // IMPRIME "Este es un ejemplo para el tipo de dato cadena"

// 3. Dividir la cadena en un array de palabras usando split()
let palabras = cadena.split(' ');
console.log(palabras); // IMPRIME ["Este", "es", "un", "ejemplo", "para", "el", "tipo", "de", "dato", "string"]


console.log('Ejemplo para datos tipo NUMBER')
let numero = 78


// 1. Convertir el número a un número decimal con dos decimales
let conDosDecimales = numero.toFixed(2);
console.log(conDosDecimales); // IMPRIME "78.00"

// 2. Convertir el número a notación exponencial
let notacionExponencial = numero.toExponential();
console.log(notacionExponencial); // IMPRIME "7.8e+1"

// 3. Convertir el número a base 16 (hexadecimal)
let enHexadecimal = numero.toString(16);
console.log(enHexadecimal); // IMPRIME "4e"


console.log('Ejemplo para datos tipo BOOL')
let booleano = true;

// 1. Convertir el valor booleano a una cadena
let comoCadena = booleano.toString();
console.log(comoCadena); // IMPRIME "true"

// 2. Utilizar el valor booleano en una condición ternaria para decidir el valor de otra variable
let mensaje = booleano ? 'El valor es verdadero' : 'El valor es falso';
console.log(mensaje); // IMPRIME "El valor es verdadero"

// 3. Negar el valor booleano
let negado = !booleano;
console.log(negado); // IMPRIME "false"

console.log('Ejemplo para datos tipo OBJECT')
let objeto = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Ingeniero'
};

// 1. Obtener las claves (propiedades) del objeto
let claves = Object.keys(objeto);
console.log(claves); // IMPRIME ["nombre", "edad", "profesion"]

// 2. Obtener los valores del objeto
let valores = Object.values(objeto);
console.log(valores); // IMPRIME ["Juan", 30, "Ingeniero"]

// 3. Convertir el objeto a una cadena JSON
let jsonString = JSON.stringify(objeto);
console.log(jsonString); // IMPRIME '{"nombre":"Juan","edad":30,"profesion":"Ingeniero"}'

console.log('Ejemplo para datos tipo ARRAY')
let array = [1, 2, 3, 4, 5];

// 1. Método find: Devuelve el primer elemento del array que cumple con la condición especificada
let elementoEncontrado = array.find(num => num > 2);
console.log(elementoEncontrado); // IMPRIME 3

// 2. Método map: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original
let arrayMultiplicado = array.map(num => num * 2);
console.log(arrayMultiplicado); // IMPRIME [2, 4, 6, 8, 10]

// 3. Método filter: Crea un nuevo array con todos los elementos que cumplan una condición
let arrayFiltrado = array.filter(num => num > 3);
console.log(arrayFiltrado); // IMPRIME [4, 5, 6]