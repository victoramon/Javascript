/* Try nos permite ejecutar codigo propenso a fallar de una manera segura */

const gravedad = 9.8;
console.log(gravedad);

try {
    /* Intenta ejecutar el codigo, si hay un error ejecuta el catch */
    gravedad = 10.1;
}catch(eror) {
    /* El catch se ejecuta si hay un error, recibe como primer parametro el error */
    console.log(e);
}finally {
    /* El finally siempre se ejecuta */
    console.log('Soy el finally')
}


console.log(gravedad);