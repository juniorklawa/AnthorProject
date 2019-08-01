const mongoose = require('mongoose');

const Movie = mongoose.model('Movie')

module.exports = {
    async index(req,res){
        const movies = await Movie.find();
        return res.json(movies)
    },

    async store(req,res){
        
        const movies = await Movie.create(req.body);

        return res.json(movies);
    },

    async show(req,res){
        const movies = await Movie.findById(req.params.id);

        return res.json(movies);
    },

    async update(req,res){
        const movies = await Movie.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.json(movies);
    },

    async destroy(req,res){
        await Movie.findByIdAndRemove(req.params.id);

        return res.send();
    }

};