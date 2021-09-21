const n1 = parseInt(prompt('Dime un número'));
const n2 = parseInt(prompt('Dime otro número'));

if (n1 < n2) {
    for (let i = n1 +1; i < n2; i++) {
        if (i %2 !==0) {
            document.write(`<strong> ${i}, </strong>`);
        }
    }
}else {
    document.write ( `<p> El segundo número debe ser mayor que el primero </p>`)
}
