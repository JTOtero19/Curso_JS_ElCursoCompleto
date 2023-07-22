var numero = 1;

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`)

    var funcionAnidada = () => {
        console.log(numero);
    }
    funcionAnidada();
};
obtenerNumeroLetras('Teo');
// console.log(numero);