import validarCantidad from "./validarCantidad";

const formulario = document.getElementById('formulario');

formulario.addEventListener('keyup', (e) => {
  // Quiero asegurarme que el elemento que tecleamos sea un input
  if (e.target.tagName === 'INPUT'){
    if (e.target.id === 'cantidad'){
      validarCantidad();
    };
  };
});
