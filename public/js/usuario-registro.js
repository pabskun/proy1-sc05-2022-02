const inputCorreo = document.getElementById('txt-correo');
const inputNombre = document.querySelector('#txt-nombre');
const selectGenero = document.getElementById('slt-genero');
const btnRegistrar = document.getElementById('btn-registrar');

const validar = () => {
    let error = false;

    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('input-error');
    } else {
        inputCorreo.classList.remove('input-error');
    }

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }

    if (selectGenero.value == '') {
        error = true;
        selectGenero.classList.add('input-error');
    } else {
        selectGenero.classList.remove('input-error');
    }
    /*
        Validaciones de todos los campos:
            1. Validación del correo
                Si el campo de correo esta vacío:
                    - variable error pasa a true
                    - el borde de el campo de correo se pinta de rojo u otro color (menos azul o verde)
                Si no (el campo está lleno):
                    - Asegurarnos de que no este pintado el borde de rojo
            2. Validación del nombre
            3. Validación del género
    */

    //Si hay error (error == true) se muestra un mensaje y no se permite obtener los datos
    //Si no hay error (error == false), entonces se obtienen los datos del formulario 
    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        obtenerDatos();
    }

};

const obtenerDatos = () => {
    //Variable de tipo JSON
    let usuario = {
        'correo': inputCorreo.value,
        'nombre': inputNombre.value,
        'genero': selectGenero.value
    };
    registrarDatos('registrar-usuario', usuario, 'usuarios-listar.html');
};

btnRegistrar.addEventListener('click', validar);