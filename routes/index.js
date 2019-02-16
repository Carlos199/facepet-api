const ciudad = require('../controllers/ciudad');
const usuario = require('../controllers/usuario');
const evento = require('../controllers/evento');
const empresa = require('../controllers/empresa')
const adopcion = require('../controllers/adopcion');

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
    router.post('/login', usuario.login);

    //Ruta de eventos
    router.get('/eventos', evento.findAll);
    router.get('/eventos/:id', evento.findById);
    router.post('/eventos', evento.create);
    router.put('/eventos/:id', evento.update);
    router.delete('/eventos/:id', evento.delete);
    
    //Ruta de empresa
    router.get('/empresas', empresa.findAll);
    router.get('/empresas/:id', empresa.findById);
    router.post('/empresas', empresa.create);
    router.put('/empresas/:id', empresa.update);
    router.delete('/empresas/:id', empresa.delete);

    //Ruta de adopcion
    router.get('/adopcion', adopcion.findAll);
    router.get('/adopcion/:id', adopcion.findById);
    router.post('/adopcion', adopcion.create);
    router.put('/adopcion/:id', adopcion.update);
    router.delete('/adopcion/:id', adopcion.delete);

    return router;
};