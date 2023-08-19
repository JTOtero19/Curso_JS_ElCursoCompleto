const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');

/*
  Esta funcion se encargra de abrir el carrito y comprobar si hay o no productos en el carrito.
  Tambien la usaremos en varios bloques.
*/
const renderCarrito =() => {

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
