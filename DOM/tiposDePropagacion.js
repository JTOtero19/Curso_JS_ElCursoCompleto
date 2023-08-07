const contenedor = document.getElementById('contenedor1');

contenedor.addEventListener('click', (e) => {
    console/console.log('click en contenedor');
});

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    console.log('click en primera caja');
});
