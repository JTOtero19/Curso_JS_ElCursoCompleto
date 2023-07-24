const obtenerPostsDeusuario = (usuario, callback)=> {
  console.log(`Obteniendo los posts de ${usuario}...`);

  setTimeout(() => {
      let posts = ['Post1', 'Post2', 'Post3'];
      callback(posts);
    }, 2000);
}

obtenerPostsDeusuario('carlos', (posts) => {
    console.log(posts);
});
