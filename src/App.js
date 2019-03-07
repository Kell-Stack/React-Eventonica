import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap'
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';


const Header = (props) => {
  return ( 
       <Jumbotron>
          <h1>{props.title}</h1>
          <p>{props.siteDescript}</p>
      </Jumbotron>
  )
}

class EventItem extends React.Component {

  // state = {
  //   events: this.getSingleEvent
  // };
}

class EventList extends React.Component {
  state = {
    events: this.getEvents
  };

  var events = getEvents();
  console.log("let's go ", events);
  }

  function getEvents() {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
    //     return xhr.responseText
    //   }
    // }
      xhr.open('GET', 'lvh.me:3006/events/')
      xhr.send();
      function sendAJAX(){
        xhr.send();
      }
  }
  render (){
    return (
      <ul className="list">
        {/* 1. call API to recieve a list of events... attempted above  */}
        {/* 2. for each event on that list create an event item class... then map */}
        {/* // info you want to get from eventful
          // <li>
            // <div>
                //<h3>Name</h3>
                //<address>City, State</address>
                //<span>Type of Event</span>
            // </div>
                        // < edit button />
                        // < del button />  
          // </li>
        // } */} 
      </ul>
    )
  }
}





class App extends Component {
  // state = {
  //   some shit
  // }
  
  render() {
    return (
      <div className="App">
        <Header
          title="Eventonica!"
          siteDescript="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
        />
      </div>
    );
  }
}


export default App;
