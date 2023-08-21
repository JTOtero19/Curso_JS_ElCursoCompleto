const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
// Detetar click en carrito
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
// accediendo a la variable del producto general, acceder al contenedor del producto
const producto = document.getElementById('producto');
// Arreglo vacio para gaurdar info de productos
const carrito = [];

/*
  Esta funcion se encargra de abrir el carrito y comprobar si hay o no productos en el carrito.
  Tambien la usaremos en varios bloques.
*/
const renderCarrito =() => {

  console.log(carrito);

  // Este modificador abriara la ventana.
  ventanaCarrito.classList.add('carrito--active');
};

// Abrir carrito
botonesAbrirCarrito.forEach((boton) => {
  boton.addEventListener('click', (e) => {

    // Ahora hay que abrirlo
    renderCarrito();
  });
});

// Cerrar carrito
botonesCerrarCarrito.forEach((boton) => {
  boton.addEventListener('click', (e) => {

    // Ahora hay que cerrarlo
    ventanaCarrito.classList.remove('carrito--active');
  });
});

//Detectar click usuario
btnAgregarCarrito.addEventListener ('click', (e) => {
  // Accediendo a la info del producto, accediendo al id linea 57 index.html
  const id = producto.dataset.productoId;
  // tambien necesitamos el nombre, color, tamanio, etc.
  const nombre = producto.querySelector('.producto__nombre').innerText;
  const cantidad = parseInt(producto.querySelector('#cantidad').value);
  // Hay que buscar el input que este marcado
  const color = producto.querySelector('#propiedad-color input:checked').value;
  const tamaño = parseInt(producto.querySelector('#propiedad-tamaño input:checked').value);

  // Creamos un arreglo que va a contener todos los productos que el usuario agregue al carrito
  carrito.push({
    id: id,
    nombre: nombre,
    cantidad: cantidad,
    color: color,
    tamaño: tamaño,
  });
});
