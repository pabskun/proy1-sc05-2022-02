const express = require('express'); //Importamos la dependencia express que permite atender peticiones (req) y devolver respuestas (res)
const router = express.Router();
const Usuario = require('../models/usuarios.model');

router.post('/registrar-usuario', (req, res) => {
    //Obtener los datos que vienen en el cuerpo de la petición
    //let nombre = req.body.nombre;
    //let correo = req.body.correo;
    //let genero = req.body.genero;

    let usuarioNuevo = new Usuario({
        "nombre": req.body.nombre,
        "correo": req.body.correo,
        "genero": req.body.genero,
        "contrasenna": req.body.contrasenna,
        "nacimiento": req.body.nacimiento
    });

    usuarioNuevo.save(error => {
        if (error) {
            res.json({
                "msj": "El usuario no se pudo registrar",
                error
            });
        } else {
            res.json({
                "msj": "Usuario registrado correctamente"
            });
        }
    });

});

router.get('/listar-usuarios', (req, res) => {
    Usuario.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Los usuarios no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Usuarios listado correctamente",
                lista
            });
        }
    });
});

router.delete('/eliminar-usuario', (req, res) => {
    Usuario.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                "msj": "El usuario no se pudo eliminar",
                error
            });
        } else {
            res.json({
                "msj": "Usuario eliminado correctamente"
            });
        }
    });
});

module.exports = router;
//Siempre debe ir al final, si no se coloca da el siguiente error: "throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))"