// estructura de una condicional

// ejemplo 1
// const usuario = {
//     edad: 24,
//     pais: 'Chile',
//     ticket: true,
// };

// if (usuario.edad > 17){
//     console.log('El usuario puede entrar al consierto');
// } else{
//     console.log('El usuario no puede entrar al concierto');
// }

// Ejemplo 2
// const usuario = {
//     edad: 24,
//     pais: 'Chile',
//     ticket: true,
// };
// 
// if(usuario.edad >= 18 && usuario.ticket){ // tambien puede ser usuario.ticket === true
//     console.log('El usuario es mayor de edad y tiene un ticket');
// } else {
//     console.log('El usuario es menor de edado no tiene ticket');
// }
// para que se ejcute tengo que tener dos verdaderos

// if(usuario.edad >= 18 || usuario.ticket){ // tambien puede ser usuario.ticket === true
//     console.log('El usuario es mayor de edad y tiene un ticket');
// } else {
//     console.log('El usuario es menor de edado no tiene ticket');
// }
//  Se tiene que cumplir una de las dos nomas


// Ejemplo #3 - anidando condicionales
// const usuario = {
//     edad: 24,
//     pais: 'Chile',
//     ticket: true,
// };
// 
// if(usuario.edad >= 18){
//     if(usuario.ticket){
//         console.log('El usuario es mayor de edad y tiene un ticket');
//     } else {
//         console.log('El usuario es mayor de edad pero no tiene ticket');
//     }
// } else {
//     console.log('El usuario es menor de edad');
// }

// Ejemplo #4 - ELSEIF
const usuario = {
    edad: 24,
    pais: 'Chile',
    ticket: true,
};

if(usuario.pais === 'Chile'){
    console.log('El usuario es Chileno');
} else if(usuario.pais === 'Colombia'){
    console.log('El usuario es Colombiano');
} else {
    console.log('El usuario es de otro pais');
}