// accediendo a mis categorias
import dataCategorias from './datos/categorias';
const { categorias } = dataCategorias;
const contenedorCategorias = document.getElementById('categorias');

categorias.forEach((categoria)=>{
  // Queremos ver el codigo interno, el cual ya le agregaremos las categorias
  const nuevaCategoria = document.createElement('a');
  const plantilla = `
  <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
						<div class="categoria__datos">
							<p class="categoria__nombre">${categoria.nombre}</p>
							<p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
						</div>
  `;

  // Aqui agregamos a mano las categorias correspondientes.
  nuevaCategoria.innerHTML = plantilla;
  nuevaCategoria.classList.add('categoria');
  nuevaCategoria.href = '#';
  nuevaCategoria.dataset.categoria = categoria.id;

  // Para guardar los datos de cada categoria
  contenedorCategorias.append(nuevaCategoria);
});
