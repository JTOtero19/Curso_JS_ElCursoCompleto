class Usuario {
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password;
    }
    obtenerPosts(){
        const posts = ['post1', 'post2'];
        return posts;
    }
}

class Moderador extends Usuario {
    constructor(usuario, password, permisos){
        super(usuario, password);
        this.permisos = permisos;
    }

    borrarPost(id){
        if(this.permisos.includes('borrar')){
          console.log(`Post ${id} ha sido borrado`);
        } else {
          console.log(`No tienes permisos para borrar el post ${id}`);
        }
    }
}

const usuario = new Usuario('Carlos', '1234');
console.log(usuario.obtenerPosts());
console.log(usuario.permisos);
usuario.borrarPost(1)

const usuario2 = new Moderador('Jota', '0000', ['borrar', 'editar']);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPost(7);
