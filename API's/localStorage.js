document.getElementById('boton1').addEventListener('click', () => {
  const nombre = prompt('Escribe tu nombre');

  // Accediendo a la API del navegador localStorage
  window.localStorage.setItem('usuario', nombre);
});

document.getElementById('boton2').addEventListener('click', () => {
  window.localStorage.removeItem('usuario');
});

// Obteniendo el nombre
if (window.localStorage.usuario){
  console.log(`Hola ${window.localStorage.usuario}`)
} else {
  console.log('No hay usuario');
};
