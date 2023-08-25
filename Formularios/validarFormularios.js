const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Buena practica para guardar los datos que queremos obtener en el formulario.
    const datos = {
      correo: formulario.correo.value,
      pais: formulario.pais.value,
      donacion: formulario.donacion.value,
      fecha: formulario.fecha.value,
      terminos: formulario['terminos-y-condiciones'].checked,
    };

    // Muy basico
    if (datos.correo.length <= 2){
      console.log('correo invalido');
      return;
    };

    // comprobamos el pasi
    if (datos.pais ===''){
      console.log('pais invalido');
      return;
    };

    // comprobamos donacion
    if (datos.donacion === ''){
      console.log('Selecciona cantidad a donar');
      return;
    };

    // comprobamos fecha
    if (datos.fecha === ''){
      console.log('Selecciona fecha');
      return;
    };

    // comprobamos terminos y condiciones
    if (!datos.terminos){
      console.log('Acepta terminos y condiciones');
      return;
    };
});
