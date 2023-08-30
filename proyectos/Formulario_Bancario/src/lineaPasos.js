import validarCantidad from "./validaciones/validarCantidad";
import validarCorreo from "./validaciones/validarCorreo";
import validarNombre from "./validaciones/validarNombre";


const linea = document.getElementById('linea-pasos');
linea.addEventListener('click', (e) => {
  if (!e.target.closest('.linea-pasos__paso')){

    // Detectar paso actual
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;

    // Validamos el campo actual
    if (pasoActual === 'cantidad'){
        if (!validarCantidad()) return false;
    } else if(pasoActual === 'datos') {
      if (!validarNombre() || !validarCorreo()) return false;
    };
    };

    // Si el navegador lee esta linea, saldra de la ejecucion del boton, por ende el codigo no se ejecutara
    return false;
});
