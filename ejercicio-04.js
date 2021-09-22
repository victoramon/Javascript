const n1 = parseInt(prompt('Dime un número'));
const n2 = parseInt(prompt('Dime otro número'));

if (n1 > n2) {
    document.write ( `<p>La suma es: ${n1+n2}</p>`)
    document.write ( `<p>La resta es: ${n1-n2}</p>`)
} else {
    document.write (`<p>La division es: ${n2 / n1}</p>`)
    document.write (`<p>La multiplicacion es: ${n2*n1}</p>`)
}

