var num = parseInt(prompt('Ingresa un número'));
let suma = 0;
let contador = 0;
let numeros = Array ();

while(num >0) {
    suma=suma+num;
    contador++;
    numeros.push(num);
    num=parseInt(prompt('Ingresa un número'));
}

document.write(` <p> La suma de los numeros es: ${suma}</p> <p> Y el promedio es: ${suma/contador} </p> <p> Los numeros ingresados fueron: ${numeros} </p> `);