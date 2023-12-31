// const crearCookie = () => {
//     document.cookie = 'nombre=Jorge; expires=1 Jan 2024 01:00:00 UTC';
// }

// const iniciarSesion = () => {
//     const usuario = promt('Usuario:');
//     document.cookie = `nombre=${usuario}; expires=1 Jan 2024 01:00:00 UTC`;
//     alert('Sesion iniciada');
// }

// console.log(document.cookie);

/*
Forma para obtener el usuario de las cookies
Encontrar cookies
 */
let usuario;
const cookies = document.cookie.split('; ');
cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0];
    if(propiedad === 'nombre') {
        usuario = cookie.split('=')[1];
    }
});

if(usuario){
    console.log(`hola ${usuario}`);
} else {
    console.log('No has iniciado sesion');
};

// soobrescribir una cookie para eliminarla
const cerrarSesion = () => {
    document.cookie = 'nombre=; expires=1 Jan 2022 01:00:00 UTC';
    console.log('Hasta luego');
}
