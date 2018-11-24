const ciudad = require('../controllers/ciudad');

module.exports = function(router) {
    router.get('/ciudades', ciudad.findAll);
    router.get('/ciudades/:id', ciudad.findById);
    router.post('/ciudades', ciudad.create);
    router.put('/ciudades/:id', ciudad.update);
    router.delete('/ciudades/:id', ciudad.delete);
    
    return router;
};