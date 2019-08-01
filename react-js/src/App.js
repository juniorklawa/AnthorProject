import React, { Component } from 'react';
import Header from './components/Header/index'
import Main from './pages/main/index'
import Routes from './routes';
import './styles.css'


const App = () => (
  <div>
    <Header />
    <Routes />
  </div>
)

export default App;
