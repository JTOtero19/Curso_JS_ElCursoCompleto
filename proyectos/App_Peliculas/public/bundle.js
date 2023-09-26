'use strict';

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
    contenedor.insertAdjacentHTML('beforeend', plantilla);
  });
};

const fetchPopulares = async() => {
  // Nos permite pasarle una direccion donde queremos hacerle la peticion
  // const url = 'https://api.themoviedb.org/3/movie/popular?api-key=63eeaec5b719dce16fe9c80c8594e9fc&language=es-MX&page=1';
  const url = 'https://api.themoviedb.org/3/movie/popular?language=es-MX&page=1';

  // Esto nos permite pasarle el codigo que queremos
  try {
     // fetch nos regresa una promesa y trabajamos con async awayt y para eso tiene que estar encerrada dentro de otra funcion
    const respuesta = await fetch(url);
    // nos permite extraer la info
    const datos = await respuesta.json();

    // queremos devolver los resultados, exto me devuelve todas las peliculas
    return datos.results;

    // Si algo falla queremos atrapar el error
  } catch(error){
    console.log(error);
  }

};

const cargar = async () => {
  const resultados = await fetchPopulares();
  cargarTitulos(resultados);
};
cargar();
// Ahora si tengo todas las peliculas
//# sourceMappingURL=bundle.js.map
