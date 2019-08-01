const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir')
//Inicia o APp
const app = express();

app.use(express.json());
app.use(cors(''));

mongoose.connect('mongodb://localhost:27017/mymoviesapi',
    { useNewUrlParser: true });


requireDir('./src/models')


const Movie = mongoose.model('Movie');

///SEED DATA

Movie.create({
    title: "The Force Awakens",
    genre: "Action, Adventure, Sci-Fi",
    date: "17 December 2015",
    actors: "Daisy Ridley, John Boyega, Oscar Isaac",
    plot: "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Defected stormtrooper Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.",
    trailer: "https://www.youtube.com/watch?v=sGbxmsDFVnE",
    poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
})

Movie.create({
    title: "Matrix",
    genre: "Action, Sci-Fi",
    date: "21 May 1999",
    actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    trailer: "https://www.youtube.com/watch?v=2KnZac176Hs",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg"
})

Movie.create({
    title: "It",
    genre: "Horror",
    date: "7 September 2017",
    actors: "Bill Skarsgård, Jaeden Martell, Finn Wolfhard ",
    plot: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
    trailer: "https://www.youtube.com/watch?v=zqUopiAYdRg",
    poster: "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
})


Movie.create({
    title: "The Godfather",
    genre: " Crime, Drama",
    date: "10 September 1972",
    actors: "Marlon Brando, Al Pacino, James Caan ",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trailer: "https://www.imdb.com/title/tt0068646/videoplayer/vi1348706585?ref_=tt_ov_vi",
    poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg"
})

//routes
app.use('/api', require('./src/routes'))




app.listen(3001);