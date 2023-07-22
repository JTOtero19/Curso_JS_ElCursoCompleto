const usuario = {
    nombre: 'Jota',
    edad: 24,
    amigos: ['Alejandro', 'Cesar', 'Manuel'],
    saludo: () => {
        console.log('Hola!');
    }
};
// usuario.saludo();

// object.keys
// const resultados = Object.keys(usuario);


// Object.values()
// const resultados = Object.values(usuario);
// console.log(resultados);

// Object.entries()
const resultados = Object.entries(usuario);
console.log(resultados);