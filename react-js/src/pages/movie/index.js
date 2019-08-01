import React, { Component } from 'react'
import axios from 'axios';
import api from '../../services/api'
import { Link, Redirect } from 'react-router-dom';
import './styles.css'

export default class Movie extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        redirect: false,
        movie: {}
    }

    async componentDidMount() {

        const {_id} = this.props.match.params;
        const response = await api.get(`http://localhost:3001/api/movies/${_id}`);
        this.setState({movie:response.data})
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
        const {_id} = this.props.match.params;
        let res = axios.put(`http://localhost:3001/api/movies/${_id}`, movie)
        console.log(res);
        
        setTimeout(() => {
            this.setState({redirect:true});
          }, 500);

    }



    render() {

        const { movie } = this.state

        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        return (
            <div className="movie-add">
                <h1>Edit movie data</h1>
                <form onSubmit={this.handleSubmit} style={{ marginTop: 40 }}>
                    <h4>Title</h4>
                    <input type="text" placeholder={movie.title} name="title" onChange={this.handleChange} required /> <br />
                    <h4>Genre</h4>
                    <input type="text" name="genre" placeholder={movie.genre} onChange={this.handleChange} /> <br />
                    <h4>Release date</h4>
                    <input type="text" name="date" placeholder={movie.date} onChange={this.handleChange} /> <br />
                    <h4>Main actors</h4>
                    <input type="text" name="actors" placeholder={movie.actors} onChange={this.handleChange} /> <br />
                    <h4>Short Plot</h4>
                    <input type="text" name="plot" placeholder={movie.plot} onChange={this.handleChange} /> <br />
                    <h4>Trailer link</h4>
                    <input type="text" name="trailer" placeholder={movie.trailer} onChange={this.handleChange} /> <br />
                    <h4>Poster link</h4>
                    <input type="text" name="poster" placeholder={movie.poster} onChange={this.handleChange} /> <br />
                    <button type="submit">Update movie</button>
                </form>

            </div>
        )
    }
}