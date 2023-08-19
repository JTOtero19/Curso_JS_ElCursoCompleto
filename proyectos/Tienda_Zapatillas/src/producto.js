const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

// Accediendo propiedad color
const propiedadColor = document.querySelector('#propiedad-color');

// Funcionalidad thumbails
thumbs.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG'){

    // Accediendo a la ruta de la imagen
    const imagenSrc = e.target.src;

    // Obteniendo la ubicacion o posicion despues de la ultima '/'
    const lastIndex = imagenSrc.lastIndexOf('/');

    // Para cortar la ultima ubicacion
    const nombreImagen = imagenSrc.substring(lastIndex + 1);

    // Reemplaar por la imagen ppal
    const reemplazarImagen = productoImagen.src = `./img/tennis/${nombreImagen}`
  };
});

// Funcionalidad colores
const cambioColor = propiedadColor.addEventListener('click', (e) => {
  if (e.target.tagName === 'INPUT') {
    productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
  };
});
