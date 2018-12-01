const ciudad = require('../controllers/ciudad');
const usuario = require('../controllers/usuario');

module.exports = function(router) {
    //Ruta de ciudades
    router.get('/ciudades', ciudad.findAll);
    router.get('/ciudades/:id', ciudad.findById);
    router.post('/ciudades', ciudad.create);
    router.put('/ciudades/:id', ciudad.update);
    router.delete('/ciudades/:id', ciudad.delete);

    //Ruta de usuarios
    router.get('/usuarios', usuario.findAll);
    router.get('/usuarios/:id', usuario.findById);
    router.post('/usuarios', usuario.create);
    router.put('/usuarios/:id', usuario.update);
    router.delete('/usuarios/:id', usuario.delete);
    
    return router;
};