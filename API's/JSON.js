const datos = `
{
  "id": 1,
  "nombre": "Teodoro",
  "Suscriptor_activo": true,
  "posts": [
    {
      "id": 1,
      "titulo": "Post 1",
      "texto": "Texto del post 1"
    },
    {
      "id": 2,
      "titulo": "Post 2",
      "texto": "Texto del post 2"
    }
  ]
}
`;

const objeto = JSON.parse(datos);

const usuario = {
  nombre: 'Carlos',
  correo: 'correo@correo.com',
  colroesFavoritos: ['Azul', 'Rojo', 'Verde']
};
JSON.stringify(usuario);
