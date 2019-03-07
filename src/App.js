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
      </Jumbotron>
      </div>
    )
  }
}


class EventItem extends Component {
render () {
  return (
    <li>
    <div>
      <h3>Name</h3>
      <address>City, State</address>
      <span>Type of Event</span>
    </div>
    <button />
    <button />  
  </li>
  )
}
}

class EventList extends Component {
  render (){
    return (
      <ul className="list">
        {/* 1. call API to recieve a list of events  */}
        getEvents
        {/* 2. for each event on that list create an event item class... then map */}
      </ul>
    )
  }
}

function getEvents() {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      return xhr
    }
  }
  xhr.open('GET', 'localhost:3000')
  xhr.send()

}


render () {
  return(
      <div className="scoreboard">
          <Header 
              title="Scoreboard" 
              totalPlayers= {this.state.players.length}
          />                                       
  
          {/*Players list*/}
          {this.state.players.map( player =>
              <Player 
                  name ={player.name}
                  id={player.id}
                  key={player.id.toString} 
                  removePlayer={this.handleRemovePlayer}
              />
          )}
      </div>
  );
}
}

export default App;
