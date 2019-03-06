import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap'
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Jumbotron>
          <h1>Eventonica!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
      </Jumbotron>;
      </div>
    );
  }
}

export default App;
