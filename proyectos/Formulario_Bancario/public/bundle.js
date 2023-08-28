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
    .querySelector(`.linea-pasos [data-paso="${paso}"] span`)
    .classList.add('linea-pasos__paso-check--cheked');
};

const formulario = document.getElementById('formulario');

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
    }
  }});
//# sourceMappingURL=bundle.js.map
