import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <CssBaseline />

            <Header />

            <Home />

            <About />

            <Footer />
        </React.Fragment>
    );
  }
}

export default App;
