const eliminarCaja = () => {
    const contenedorPadre = document.getElementById('contenedor1');
    const cajaAEliminar = contenedorPadre.querySelector('.caja');

    if(cajaAEliminar){
      contenedorPadre.removeChild(cajaAEliminar);
    }
};
