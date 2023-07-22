// const frutas = ['Manzana', 'Pera', 'Pina', 'Melon'];
// const comidaFavorita = ['Pizza', 'Sushi', 'Burguer', ...frutas];
// // console.log(comidaFavorita);

// const datosLogin = {
//     nombre: 'Arturo',
//     correo: 'correo@correo.com',
//     password: '123',
// };

// const usuario = {
//     nombre: 'Carlos',
//     edad: 27,
//     ...datosLogin,
// };

// console.log(usuario);

// parametro rest

// const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
//     // console.log(nombre, correo, datosAdicionales);
// };
// registrarUsuario('Carlos', 'correo@correo.com');
// registrarUsuario('Juan', 'Juan@correo.com', 26, 'Chile');


// destruturacion
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
// console.log(primerAmigo);

const persona = {
    nombre: 'Carlos',
    edad: 27,
    pais: 'Chile',
};

const {nombre, pais} = persona;
// console.log(nombre, pais);

const mostrarEdad = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} anios`);
};
mostrarEdad(persona);