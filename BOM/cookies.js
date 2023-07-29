const crearCookie = () => {
    document.cookie = 'nombre=Jorge; expires=1 Jan 2024 01:00:00 UTC';
}

const iniciarSesion = () => {
    const usuario = promt('Usuario:');
    document.cookie = `nombre=${usuario}; expires=1 Jan 2024 01:00:00 UTC`;
    alert('Sesion iniciada');
}

console.log(document.cookie);
