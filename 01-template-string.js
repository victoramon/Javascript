const nombre = prompt('¿Cual es tu nombre?');
const edad = prompt('¿Cual es tu edad?');

console.log('Hola ' + nombre + ' saludos. Tu edad es ' + edad + ' años');

const saludo = `<h1> Hola ${nombre} saludos. Tu edad es ${edad} años </h1>`;

document.write(saludo);