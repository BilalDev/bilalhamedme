import React, { Component } from 'react';

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Todo from './components/todo/Todo';

class App extends Component {
  render() {
    return (
        <div>
            <Header />

            <Todo />

            <Footer />
        </div>
    );
  }
}

export default App;
