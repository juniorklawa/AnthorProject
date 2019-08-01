import React, { Component } from 'react'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import './styles.css'

export default class AddMovie extends Component {


    constructor() {
        super();


        this.handleChange = this.handleChange.bind(this);

    }


    state = {
        redirect: false
    }



    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = evt => {
        evt.preventDefault();



        const movie = {
            title: this.state.title,
            genre: this.state.genre,
            date: this.state.date,
            actors: this.state.actors,
            plot: this.state.plot,
            poster: this.state.poster,
            trailer: this.state.trailer,
        };

        let res = axios.post('http://localhost:3001/api/movies', movie)
        console.log(res);
        console.log(movie)
        
        setTimeout(() => {
            this.setState({redirect:true});
          }, 500);
    }



    render() {

        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        return (
            <div className="movie-add">
                <h1>Add new movie</h1>
                <form onSubmit={this.handleSubmit} style={{ marginTop: 40 }}>
                    <h4>Title</h4>
                    <input type="text" name="title" onChange={this.handleChange} required /> <br />
                    <h4>Genre</h4>
                    <input type="text" name="genre" onChange={this.handleChange} required /> <br />
                    <h4>Release date</h4>
                    <input type="text" name="date" onChange={this.handleChange} required /> <br />
                    <h4>Main actors</h4>
                    <input type="text" name="actors" onChange={this.handleChange}  required/> <br />
                    <h4>Short Plot</h4>
                    <input type="text" name="plot" onChange={this.handleChange} required /> <br />
                    <h4>Trailer link</h4>
                    <input type="text" name="trailer" onChange={this.handleChange}  required/> <br />
                    <h4>Poster link</h4>
                    <input type="text" name="poster" onChange={this.handleChange}  required/> <br />
                    <button type="submit">Add movie</button>
                </form>

            </div>
        )
    }
}