const btnIngresar = document.getElementById('btn-ingresar');

const iniciarSesion = async() => {
    const { value: formValues } = await Swal.fire({
        title: 'Inicio de sesión',
        html: '<input id="txt-correo-inicio" class="swal2-input" type="email">' +
            '<input id="txt-contrasenna" class="swal2-input" type="password">',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('txt-correo-inicio').value,
                document.getElementById('txt-contrasenna').value
            ]
        }
    })

    if (formValues) {
        let correo = formValues[0];
        let contrasenna = formValues[1];
        validarCredenciales(correo, contrasenna);
    }
};

const validarCredenciales = (correo, contrasenna) => {
    let usuarioValidado = false;
    usuarios.forEach(objUsuario => {
        if (objUsuario.correo == correo && objUsuario.contrasenna == contrasenna) {
            usuarioValidado = true;
            localStorage.setItem('usuarioConectado', JSON.stringify(objUsuario));
        }
    });

    if (usuarioValidado == false) {
        Swal.fire({
            'title': 'No se ha podido iniciar sesión',
            'text': 'El correo del usuario o la contraseña son incorrectos',
            'icon': 'warning',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'title': 'Inicio de sesión correcto',
            'text': 'Bienvenido',
            'icon': 'success',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'perfil.html';
        });
    }

};

btnIngresar.addEventListener('click', iniciarSesion);