const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const posts = ['Post 1', 'Post 2', 'Post3'];
        const error = true;

        if(error){
            reject('Hubo un error al intentar obtener los posts');
        } else {
            resolve(posts);
        }
    }, 2000);
  });
};

// quiero que tenga caracteristicas asyncronas
const mostrarPosts = async() =>{
    try {
      const posts = await fetchPosts();
      console.log(posts);
    } catch(error){
        console.log(error);
    }
};
mostrarPosts();



// si es exitosa llamamos al .then()
/* console.log('Inica operacion');
fetchPosts()
    .then((posts) => {
      console.log(posts)
    }).catch((error) => {
      console.log(error)
    });
console.log('Finaliza operacion');
 */
