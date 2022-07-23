const tabla = document.querySelector('#tbl-usuarios');
const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.getElementById('txt-filtro');

tabla.classList.add('ocultar');


const llenarTabla = () => {
    cuerpoTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    usuarios.forEach(usuarioTemp => {
        if (usuarioTemp.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            let fila = cuerpoTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable

            fila.insertCell().textContent = usuarioTemp.correo;
            fila.insertCell().textContent = usuarioTemp.nombre;
            fila.insertCell().textContent = usuarioTemp.genero;

            //Creación de la celda para los botones
            let tdAcciones = fila.insertCell();

            //Creación del botón de editar
            let btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.type = 'button';
            btnEditar.classList.add('btn-editar');

            //Creación del botón de eliminar
            let btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.type = 'button';
            btnEliminar.classList.add('btn-eliminar');

            //Agregar el botón de editar y eliminar a la celda de acciones
            tdAcciones.appendChild(btnEditar);
            tdAcciones.appendChild(btnEliminar);

            btnEliminar.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Está seguro que desea eliminar la información?',
                    text: "La acción no se puede revertir",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Sí, eliminar!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '¡Registro eliminado!',
                            'El usuario fue borrado',
                            'success'
                        )
                    }
                })
            });
        }


    });
};


llenarTabla();
let btnMostrarOcultar = document.getElementById('btn-mostrar');

btnMostrarOcultar.addEventListener('click', () => {
    if (tabla.classList.contains('ocultar')) {
        btnMostrarOcultar.textContent = 'Ocultar lista';
        tabla.classList.remove('ocultar');
    } else {
        btnMostrarOcultar.textContent = 'Mostrar lista';
        tabla.classList.add('ocultar');
    }
    //tabla.classList.toggle('ocultar');

});

inputFiltro.addEventListener('keyup', llenarTabla);