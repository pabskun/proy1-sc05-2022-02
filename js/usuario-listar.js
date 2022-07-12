const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');


const llenarTabla = () => {
    cuerpoTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    usuarios.forEach(usuarioTemp => {
        let fila = cuerpoTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = usuarioTemp.correo;
        fila.insertCell().textContent = usuarioTemp.nombre;
        fila.insertCell().textContent = usuarioTemp.genero;
    });
};


llenarTabla();