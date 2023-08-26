const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    // Buena practica para guardar los datos que queremos obtener en el formulario.
    const datos = {
      correo: formulario.correo.value,
      pais: formulario.pais.value,
      donacion: formulario.donacion.value,
      fecha: formulario.fecha.value,
      terminos: formulario['terminos-y-condiciones'].checked,
    };

    // Comprobamos correo
    if (!expresionRegular.test(datos.correo)){
      console.log('correo invalido');
      return;
    };
});
