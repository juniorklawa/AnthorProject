import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './pages/main';
import Movie from './pages/movie';
import AddMovie from './pages/addmovie';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/AddMovie" component={AddMovie}/>
            <Route path="/EditMovie/:_id" component={Movie}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;