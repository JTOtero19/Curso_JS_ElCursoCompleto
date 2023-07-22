// const boleto = 'vip';
// // a las variables let se le pueden asignar valores mas adelante
// let codigoDeAcceso;
// 
// if(boleto === 'vip'){
//     codigoDeAcceso = 'VIP-123-456';
// }else {
//     codigoDeAcceso = 'REGULAR-000-1230;'
// };
// 
// console.log(codigoDeAcceso)

// Ejemplo #1
const boleto = 'vip';
const codigoDeAcceso = (boleto === 'vip') ? 'VIP-123-456' : 'REGULAR-000-1230';

// Ejemplo #2
boleto === 'vip' ? console.log('tu boelto es vip') : console.log('Tu boleto es regular');

