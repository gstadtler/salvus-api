const express = require('express');
const routes = express.Router();
const PatientsController = require('./controllers/PatientsController');

routes.get('/api/patients', PatientsController.index);
routes.get('/api/patients/:id', PatientsController.show);
routes.post('/api/patients', PatientsController.create);
routes.put('/api/patients/:id', PatientsController.update);
routes.delete('/api/patients/:id', PatientsController.delete);

module.exports = routes;