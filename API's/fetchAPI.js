// // endpoint es la direccion a la cual quiero hacer la peticion
const endpoint = 'https://api.npoint.io/7db9880250650986721d'

// // Como hacer peticiones
// // Fetch nos devuelve promesas
// fetch(endpoint)
//   .then((respuesta) => {
//     console.log('Peticion exitosa');

//     // accedemos a la respuesta y con JSON la utilziara para extraer formato json
//     const promesa = respuesta.json();
//     // then accedemos a los datos y en catch al error
//     promesa
//       .then((datos) => {
//         console.log(datos.id);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch(() => {
//     console.log('Peticion fallida')
//   })

// Async await
const obtenerDatos = async() => {
  const respuesta = await fetch(endpoint);
  const datos = await respuesta.json();

  console.log(datos);
};
obtenerDatos();
