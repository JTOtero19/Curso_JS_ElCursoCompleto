// const saludo = () => {
//   console.log("Hola Mundo");
// };

// let id; // variable global.
// const iniciar = () => {
//   console.log('Iniciando...');
//   id = setInterval(saludo, 1500); // esta es una variable local.
// }

// const detener = () => {
//   console.log('Deteniendo...');
//   clearTimeout(id);
//   console.log('Detenido');
// }


// setinterval() -> ejecuta una función cada cierto tiempo.

let cuenta = 0;
let id; // variable global.

const iniciar = () => {
  id = setInterval(() => {
    console.log(cuenta++);
  }, 1000);
}

const detener = () => {
    console.log('Deteniendo...');
    clearInterval(id);
}

// soy un asco
