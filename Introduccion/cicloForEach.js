//forEach

// const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// amigos.forEach((amigo, index) => {
//     console.log(`El amigo ${index} es; ${amigo}`);
// });

// for in

// const persona = {
//     nombre: 'Carlos',
//     edad: 27,
//     correo: 'correo@correo.com',
// };

// for (propiedad in persona) {
//     persona[propeidad] = '';
// };
// console.log(persona);

// for of

const etiquetas = document.head.children;
// console.log(etiquetas);
// etiquetas.forEach((etiqueta) => {
//     console.log(etiqueta);
// });

// for (elemento of etiquetas) {
//     console.log(elemento);
// };

[...etiquetas].forEach((elemento) => {
    console.log(elemento);
});
