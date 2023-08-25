const formulario = document.forms['formulario-donacion'];

/*
  Submit
*/
// Se ejecutara cuando el formulario sera enviado
formulario.addEventListener('submit', (e) =>{

  // Evita que el formulario se envie
  e.preventDefault();
});

// Change
formulario.pais.addEventListener('change', (e) => {
  console.log('Cambio');
  console.log('el nuevo valor es: ' + e.target.value);
});

// radio button
formulario['cantidad-5'].addEventListener('change', (e) => console.log('Cambio el valor'));

// evento focus
formulario.correo.addEventListener('focus', (e) => console.log('El foco esta en el correo'));

// evento blur
formulario.correo.addEventListener('blur', (e) => console.log('El foco ya no esta en el correo'));

// keydown
formulario.correo.addEventListener('keydown', (e) => console.log(e.target.value));

// keyup
formulario.correo.addEventListener('keyup', (e) => console.log(e.target.value));
