const Usuario = require('../models').Usuario;

module.exports = {
    //Get all
    findAll(req, res) {
        Usuario.findAll()
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Get by id
    findById(req, res) {
        Usuario.findById(req.params.id)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Create
    create(req, res) {
        Usuario.create(req.body)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Edit
    update(req, res) {
        Usuario.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Delete
    delete(req, res) {
        Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },

    login(req, res) {
        Usuario.find({
            correo: req.body.correo,
            clave: req.body.clave
        })
            .then(function (result) {
                res.status(200).json(result);
            }) 
            .catch(function (err) {
                res.status(500).json(err);
            });
    },

};