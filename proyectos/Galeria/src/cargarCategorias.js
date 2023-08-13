import dataCategorias from './datos/categorias';
const { categorias } = dataCategorias;
const contenedorCategorias = document.getElementById('categorias');

categorias.forEach((categoria)=>{
  console.log(categoria);
});
