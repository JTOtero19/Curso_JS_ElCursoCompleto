const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList);


const agregarClase = () => {
    primeraCaja.classList.add('activa')
};

const eliminarClase = () => {
  primeraCaja.classList.remove('activa')
};

const toggleClass = () => {
  primeraCaja.classList.remove('activa')
};

const comprobarClase = () => {
  if (primeraCaja.classList.contains('activa')){
    console.log('Tiene la clase activa');
  } else {
    console.log('No tiene la clase activa');
  }

  console.log('y contiene las siguientes clases: ')
  primeraCaja.classList.forEach((clase) => {
    console.log(clase)
  });
};
