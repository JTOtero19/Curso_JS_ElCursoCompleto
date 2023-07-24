class Usuario {
  constructor(nombre, correo){
      this.nombre = nombre;
      this.correo = correo;
  }

  static borrarUsuario(id_usuario){
      console.log(`El usuario ${id_usuario} fue borrado`);
  }

  static registrados = 1000;
}

// const usuario = new Usuario('Jota', 'correo@correo.com');
// usuario.borrarUsuario(1);
Usuario.borrarUsuario(1);
console.log(Usuario.registrados);
