const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');

boton1.addEventListener('click', (e) => {
    primeraCaja.classList.toggle('activa');
});


const cajas = document.querySelectorAll('.caja');

cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        console.log(`Haz echo click en la caja: ${e.target.innerHTML}`);
    });
});
