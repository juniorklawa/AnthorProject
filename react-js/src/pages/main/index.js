import React, { Component } from 'react';
import api from '../../services/api'
import './styles.css'
import { Link, Redirect } from 'react-router-dom';
import { Container, Button} from 'react-floating-action-button'
import 'font-awesome/css/font-awesome.min.css';
export default class Main extends Component {

    state = {
        movies: [],
        redirect: false
    }

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies = async () => {
        const response = await api.get('http://localhost:3001/api/movies');
        this.setState({ movies: response.data })
    }

    goToAddMovie = () => {
        this.setState({
          redirect: true
        })
       }

    render() {

        const { movies } = this.state

        if(this.state.redirect) {
            return <Redirect to="/AddMovie" />
          }

     

        return (
            <div className="movie-list">
                {movies.map(movie => (
                    <article key={movie._id}>
                        <img alt="poster" src={movie.poster}></img>
                        <h2>{movie.title}</h2>
                        <p><b>Released:</b> {movie.date}</p>
                        <p><b>Genre:</b> {movie.genre}</p>
                        <p><b>Stars:</b> {movie.actors}</p>
                        <p>{movie.plot}</p>             
                        <a href={movie.trailer}> Watch trailer</a>
                        <a href={`/EditMovie/${movie._id}`}> Edit data</a>
                    </article>
                    
                ))}


                <Container>
              
                    <Button
                        tooltip="Add a new movie!"
                        icon="fa fa-plus"
                        styles={{backgroundColor:'#F5C518'}}
                        onClick={() => this.goToAddMovie()}/>
                        
                </Container>
            </div>
        )
    }
}