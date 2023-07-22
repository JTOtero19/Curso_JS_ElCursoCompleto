// const usuario = {
//     nombre: 'Teo',
//     pais: 'Chile',
// };

// if (usuario.pais === 'Chile'){
//     console.log('El usuaio es Chileno');
// } else if(usuario.pais === 'Mexico'){
//     console.log('El usuario es Mexicano');
// } else{
//     console.log('El usuario es de otro pais')
// };

const usuario = {
    nombre: 'Teo',
    pais: 'Chile',
};

switch(usuario.pais){
    case 'Chile':
        console.log('El usuario es Chileno');
        break;
    case 'Mexico':
        console.log('El usuario es Mexicano');
        break;
    default: 
    console.log('El usuario es de otro pais');
}; 