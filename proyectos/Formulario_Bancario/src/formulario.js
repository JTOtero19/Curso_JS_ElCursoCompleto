import validarCantidad from "./validaciones/validarCantidad";
import validarNombre from "./validaciones/validarNombre";
import validarCorreo from "./validaciones/validarCorreo";
import marcarPaso from "./marcarPaso";
import siguientePaso from "./siguientePaso";

const formulario = document.getElementById('formulario');

// reiniciando el scroll al cargar el formulario
formulario.querySelector('.formulario__body').scrollLeft = 0;

// Primera valdiacion, cuando el usuario escribe
formulario.addEventListener('keyup', (e) => {
  // Quiero asegurarme que el elemento que tecleamos sea un input
  if (e.target.tagName === 'INPUT'){
    if (e.target.id === 'cantidad'){
      validarCantidad();
    } else if (e.target.input === 'nombre-receptor'){
      validarNombre();
    } else if (e.target.input === 'correo-receptor'){
      validarCorreo();
    };
  };
});

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
    };

  } else if (pasoActual === 'datos'){
    if (validarNombre() && validarCorreo()){

      // Nos valdiara el paso
      marcarPaso('datos');
      siguientePaso();
    };
  } else if (pasoActual === 'metodo'){
    marcarPaso('metodo');
    siguientePaso();
  };
});
