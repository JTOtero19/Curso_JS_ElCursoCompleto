'use strict';

const formulario$1 = document.getElementById('formulario');

const validarCantidad = () => {
  // Aceptamos cualquier digito del 0-9 y un punto con decimales.
  const expRegularCantidad = /^\d+(\.\d+)?$/;

  // Acceder al inpiut de cantidad
  const inputCantidad = formulario$1.cantidad;

  if (expRegularCantidad.test(inputCantidad.value)){
    inputCantidad.classList.remove('formulario__input--error');
    return true;
  } else {
    inputCantidad.classList.add('formulario__input--error');
    return false;
  }
};

const marcarPaso = (paso) => {
  document
    .querySelector(`.linea-pasos [data-paso="${paso}"] .linea-pasos__paso-check`)
    .classList.add('linea-pasos__paso-check--cheked');
};

// const siguientePaso = () => {

//   // Array donde guardaremos la posicion del index
//   const pasos = [...document.querySelectorAll('.linea-pasos__paso')];

//   // Obtener el paso activo donde nos encotnramos
//   const pasoActivo = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso');

//   // Obtener el index del paso activo
//   const indexPasoActivo = pasos.indexOf(pasoActivo);

//   // Le restamos el 1 ya que estamos trabajando con index, es decir parte en 0, no en 1
//   if (indexPasoActivo < pasos.length - 1){
//     // Eliminamos la clase de paso activo
//     pasoActivo.querySelector('span').classList.remove('.linea-pasos__paso-check--active');

//     // Ponemos la clase de paso activo al siguiente elemento
//     pasos[indexPasoActivo + 1].querySelector('span').classList.add('.linea-pasos__paso-check--active');

//     const id = pasos[indexPasoActivo + 1].dataset.paso;
//     document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
//       inline: 'start',
//       behavior: 'smooth',
//     });

//   };

// };

// export default siguientePaso;


/**
 * Funcion que navega al siguiente paso.
 */
const siguientePaso = () => {
	// Creamos un arreglo con los pasos.
	const pasos = [...document.querySelectorAll('.linea-pasos__paso')];

	// Obtenemos el paso activo.
	const pasoActivo = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso');

	// Obtenemos el index del paso activo.
	const indexPasoActivo = pasos.indexOf(pasoActivo);

	// Comprobamos si hay mas pasos.
	if (indexPasoActivo < pasos.length - 1) {
		// Eliminamos la clase de paso activo.
		pasoActivo.querySelector('span').classList.remove('linea-pasos__paso-check--active');
		// Ponemos la clase de paso activo al siguiente elemento.
		pasos[indexPasoActivo + 1].querySelector('span').classList.add('linea-pasos__paso-check--active');

		// Mostramos el siguiente elemento.
		const id = pasos[indexPasoActivo + 1].dataset.paso;

		document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
			inline: 'start',
			behavior: 'smooth',
		});
	}
};

const formulario = document.getElementById('formulario');

// reiniciando el scroll al cargar el formulario
formulario.querySelector('.formulario__body').scrollLeft = 0;

// Primera valdiacion, cuando el usuario escribe
formulario.addEventListener('keyup', (e) => {
  // Quiero asegurarme que el elemento que tecleamos sea un input
  if (e.target.tagName === 'INPUT'){
    if (e.target.id === 'cantidad'){
      validarCantidad();
    }  }});

// Segunda validacion, al apretar el boton de enviar.
const btnFormulario = document.getElementById('formulario__btn');
btnFormulario.addEventListener('click', (e) => {
  e.preventDefault();

  // Detectar en que paso nos detectamos
  const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;

  if (pasoActual === 'cantidad'){
    // Tenemos que agregar un condicional
    if (validarCantidad()){

      // Nos valdiara el paso
      marcarPaso('cantidad');
      siguientePaso();
    }
  }});
//# sourceMappingURL=bundle.js.map
