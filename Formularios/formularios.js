/*
  - Hay dos formas de acceder a formularios
    - Mediante objeto forms
    - Mediante metodos del DOM
*/
// console.log(document.forms['formulario-donacion']['correo'].value);



// Funcionalidad de botones
const botonEnviar = document.getElementById('btnEnviar');
botonEnviar.addEventListener('click', (e) => {
  e.preventDefault();

  const correo = document.querySelector('#formulario-donacion [name="correo"]');
  console.log(correo.value);

  console.log(document.forms['formulario-donacion']['pais'].value);

  const formulario = document.forms['formulario-donacion'];
  console.log(formulario['donacion'].value);

  console.log(formulario.fecha.value);

  console.log(formulario['terminos-y-condiciones'].checked);
});
