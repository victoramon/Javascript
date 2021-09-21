var numero = parseInt(prompt('Escriba un numero'));

while(isNaN(numero)){
    numero = parseInt(prompt('Escribe un numero'));

}

if(numero %2==0){
    document.write('<h1> El numero es par </h1>')
}else{
    document.write('<h1> El numero es impar </h1>')
}