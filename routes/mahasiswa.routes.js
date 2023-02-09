const express = require('express');
const routes = express.Router();
const MahasiswaController = require('../controllers/mahasiswa.controller');

routes.get('/', MahasiswaController.findAll);
routes.get('/:id', MahasiswaController.findOne);
routes.post('/', MahasiswaController.create);
routes.patch('/:id', MahasiswaController.update);
routes.delete('/:id', MahasiswaController.removeOne);

module.exports = routes;