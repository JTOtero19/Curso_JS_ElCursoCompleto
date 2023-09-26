const fetchPopulares = async() => {
  // Nos permite pasarle una direccion donde queremos hacerle la peticion
  // const url = 'https://api.themoviedb.org/3/movie/popular?api-key=63eeaec5b719dce16fe9c80c8594e9fc&language=es-MX&page=1';
  const url = 'https://api.themoviedb.org/3/movie/popular?language=es-MX&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2VlYWVjNWI3MTlkY2UxNmZlOWM4MGM4NTk0ZTlmYyIsInN1YiI6IjY1MTFjYjYzM2E0YTEyMDExY2Y0NjE0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s9PRkpARfez-NrZspn4567uRtor13shKAHyIzlVyxmc'
    }
  };

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

export default fetchPopulares;
