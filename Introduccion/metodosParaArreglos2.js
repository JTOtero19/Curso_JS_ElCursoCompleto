// .indesxOf();
// const nombres = ['Alejandro', 'Cesar', 'Manuel'];

// console.log(nombres.indexOf('Cesar'));


// nombres.forEach((nombre, index) => {
    // console.log(`${index} - Hola ${nombre}`);
// });

// const resultado = nombres.find((nombre) => {
//     if (nombre[0] === 'C') {
//         return nombre;
//     }
// });
//  console.log(resultado);

// .map()
// const nombres = ['Alejandro', 'Cesar', 'JP', 'Manuel'];
// const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
// console.log(nombresMayusculas);

// const nombresCuatroLetras = nombres.filter((nombre) => {
//     if(nombre.length == 2){
//         return nombre;
//     }
// });
// console.log(nombresCuatroLetras);
// ['JP']


//include()
// const nombres = ['Alejandro', 'Cesar', 'JP', 'Manuel'];
// console.log(nombres.includes('Cesar'));

// every()
// const nombres = ['Alejandro', 'Cesar', 'JP', 'Manuel', 19];
// const nombresValidos = nombres.every((nombre) => {
//     if(typeof nombre === 'string'){
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(nombresValidos);

// .some()
const nombres = ['Alejandro', 'Cesar', 'JP', 'Manuel', 19];
const nombresValidos = nombres.some((nombre) => {
    if(typeof nombre !== 'string'){
        return true;
    } else {
        return false;
    }
});
console.log(nombresValidos);