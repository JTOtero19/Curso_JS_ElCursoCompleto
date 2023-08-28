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

const formulario = document.getElementById('formulario');

formulario.addEventListener('keyup', (e) => {
  // Quiero asegurarme que el elemento que tecleamos sea un input
  if (e.target.tagName === 'INPUT'){
    if (e.target.id === 'cantidad'){
      validarCantidad();
    }  }});
//# sourceMappingURL=bundle.js.map
