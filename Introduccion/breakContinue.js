// const nombres = ['Andres', 'Angel', 'Alejandro', ' Roberto', 'Adrian', 'Antonio', 'Arturo'];

//break

// for(let i = 0; i < nombres.length; i++){
//     if(nombres[i][0] !== 'A'){
//         break;
//     }
//     console.log(nombres[i]);
// };

// continue

const invitados = ['Carlos', 'Christian', 'Christofer', 'Jorge', 'Estefania', 'Erika', 'Manuel'];
console.log('Lista de personas aceptadas: ');

for(let i = 0; i < invitados.length; i++){
    if(invitados[i] === 'Jorge'){
        continue;
    }
    console.log(invitados[i]);
};