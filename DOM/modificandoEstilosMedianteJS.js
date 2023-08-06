const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';

const cajas = document.querySelectorAll('.caja');
let tamanio = 24;


const incrementarFuente = () => {
    cajas.forEach((caja) => {
        caja.style.fontSize = `${tamanio + 1}px`;
        tamanio++;
    })
}


const disminuirFuente = () => {
  cajas.forEach((caja) => {
      caja.style.fontSize = `${tamanio - 1}px`;
      tamanio--;
  })
}
