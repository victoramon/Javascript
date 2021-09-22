/* Arreglos
    Estructura de datos
*/

/* Declaracion de arreglos */
const arreglo = [];
const arreglo2 = new Array();

let lenguajes = ['Javascript', 'Java', 'PHP',       'Python', 'c#', 'c++', 'Scala', 'Rust', 'Ruby', 'Cobol', 
];

/* for(leet i = 0; i < lenguajes.length -1; i++) {
    lenguajes[i];
} */

/* forEach */
document.write('<ul>');
lenguajes.forEach( function(lenguaje, index) {
    document.write(`<li>${index} - ${lenguaje}</li>`);
});
document.write('</ul>');

/* Map, crea un nuevo arreglo con los resultados */
let numeros = Array(2, 3, 4, 27, 19, 12);
let numeros2 = numeros.map(function(numero) {
    return numero * 2;
});
console.log(numeros);
console.log(numeros2);

/* Includes determina si un arreglo contiene un valor*/
console.log(lenguajes.includes('PHP'));
console.log(lenguajes.includes('Go'));

/* Filter, crea un nuevo arreglo con todos los elementos que cumplan con la condicion */

let filtrados = numeros.filter(function(numero) {
    if(numero > 10) {
        return numero
    }
});

console.log(filtrados);

/* para hacer rangos mas largos */
let arrayvic = []
for(let i = 0; i < 51; i++) {
    arrayvic.push (i);
}

console.log(arrayvic);