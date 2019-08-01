const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    actors: {
        type: String,
        required: true,
    },
    plot: {
        type: String,
        required: true,
    },
    trailer: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: false,
    },


});
//MovieSchema.plugin(mongoosePaginate);
mongoose.model('Movie', MovieSchema);