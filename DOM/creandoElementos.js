const agregarCaja = () => {
    const nuevaCaja = document.createElement('div');
    nuevaCaja.innerText = 'Nueva Caja!';
    // nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');
    const contenedor = document.getElementById('contenedor1');
    // contenedor.appendChild(nuevaCaja);
    // contenedor.insertAdjacentElement('afterbegin', nuevaCaja);
    document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);
}
