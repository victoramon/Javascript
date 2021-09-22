/* Switch
    Estructura de control de flujo, nos ayuda a tomar decisiones mediante la evaluacion de una condicion.
    (tipo if)
*/

/* const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";

switch (edad) {
    case 18: 
        mensaje = "Acabas de cumplir la mayorita de edad";
        break;
    case 25:
        mensaje = "Ya eres un adulto";
        break;
    case 70:
        mensaje = "Ya eres de la tercera edad";
        break;
    default: 
        mensaje = "Fuera del rango de edad";
        break;
}

document.write(`<p>${mensaje}</p>`) */

const nombre = prompt('Ingresa tu nombre');
let mensaje = '';

switch (nombre.toLowerCase()){
    case 'carlos':
        mensaje = 'Eres administrador';
        break;
    case 'juan':
        mensaje = 'Eres usuario';
        break;
    default:
        mensaje = 'No tienes permisos para usar el sistema';
        break;
}

document.write(`<p>${mensaje}</p>`)