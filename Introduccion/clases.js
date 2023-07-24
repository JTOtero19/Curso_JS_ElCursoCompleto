class Usuario {
    tipo = 'usuario';

    constructor(nombre, apellido){
      // quiero acceder a la propeidad de nombre, si no existe quiero que la crees
        this.nombre = nombre;
        this.apellido = apellido;

        console.log('Nuevo usuario registrado');
    }

    obernerNombreCompleto(){
        console.log('Obetniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }
}

// para crear el objeto es con new
// y esto hay que guardarlo en algun sitio
const usuario = new Usuario('Carlos', 'Garcia');
console.log(usuario.obernerNombreCompleto());
// obernerNombreCompleto es un metodo que pertenese al Usuario

// const usuario2 = new Usuario('Juan', 'Paul');
// console.log(usuario2);
