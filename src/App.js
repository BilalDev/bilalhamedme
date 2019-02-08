import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
        <React.Fragment>

            <Header />

            <Home />

            <Footer />
        </React.Fragment>
    );
  }
}

export default App;
