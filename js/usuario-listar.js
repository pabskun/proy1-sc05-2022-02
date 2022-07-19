const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');


const llenarTabla = () => {
    cuerpoTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    usuarios.forEach(usuarioTemp => {
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

    });
};


llenarTabla();