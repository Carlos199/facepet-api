const Empresa = require('../models').empresa

module.exports = { 
    //Get all
    findAll(req, res) {
        Empresa.findAll()
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    },
    //Get by id
    findById(req, res) {
        Empresa.findById(req.params.id)
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    },
    //Create
    create(req, res) {
        Empresa.create(req.body)
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    },
    //Edit
    update(req, res) {
        Empresa.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    },
    //Delete
    delete(req, res) {
        Empresa.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (result) {
                res.status(200).json(result);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    },
};