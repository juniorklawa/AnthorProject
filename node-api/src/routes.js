const express = require('express');
const routes = express.Router();
const MovieController = require ('./controllers/MovieController');
//get all
routes.get('/movies', MovieController.index )
//id unico
routes.get('/movies/:id', MovieController.show )
//post
routes.post('/movies', MovieController.store)
//put
routes.put('/movies/:id', MovieController.update)
//delete
routes.put('/movies/:id', MovieController.destroy)

module.exports = routes;