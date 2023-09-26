// queremos que esta funcion reciba los resultados del index y carge los titulos en el dom
const cargarTitulos = (resultados) => {
  // ya tenemos el contenedor donde estaremos agregando todos los resultados
  const contenedor = document.querySelector('#populares .main__grid');

  // por cada resultado quiero que hagas una plantilla con la pelicula adecuada
  resultados.forEach((resultado) => {
    // en img, le estamos diciendo que carge cierta imagen, de cierto tamanio de la direccion que nosotros le estamos pasando
    const plantilla = `
      <div class="main__media">
        <a href="#" class="main__media-thumb">
          <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
        </a>
        <p class="main__media-titulo">${resultado.title}</p>
        <p class="main__media-fecha">2021</p>
      </div>
    `;

    //ahora queremos agregar esta plantilla al contenedor
    contenedor.insertAdjacentHTML('beforeend', plantilla)
  });
};

export default cargarTitulos;
