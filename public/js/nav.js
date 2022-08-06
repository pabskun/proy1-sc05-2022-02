let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
let opcionesNav = document.querySelectorAll('.header-principal nav a');

const mostrarOpciones = () => {

    switch (usuarioConectado.rol) {
        case 1:
            break;
        case 2:
            opcionesNav[2].classList.add('ocultar');

            break;
    }
};

mostrarOpciones();