var num = parseInt(prompt('Ingresa un número'));
var contador = 0;

while (contador<=num) {
    contador++;
    if(num%contador==0) {
    document.write (contador + '<br />');
    }
}