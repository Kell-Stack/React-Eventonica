import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import './App.css';
import './keys.js';
const API = '/events/'
 

const Header = (props) => {
  return ( 
       <Jumbotron>
          <h1>{props.title}</h1>
          <p>{props.siteDescript}</p>
      </Jumbotron>
  )
}

const EventList = (props) => {
    return (
      <ListGroup>
        <div className="allEvents">
          <span className="event-info">
                {/* <button className="edit-event" onClick={ () => props.editEvent(props.name)}>✍</button>
                  {props.name} */}
                <button className="remove-event" onClick={ () => props.removeEvent(props.id)}>✖</button>
                  {props.name}
          </span>
        </ div>
      </ListGroup>
    )
  }


class App extends React.Component {
    constructor() {
      super();
      this.state = {
        events: [],
      };
    }

    loadEvents() {
      fetch(API, {
        headers: {"content-type": "application/json"}
      })
        .then(resp => {
          if (!resp.ok) {
            if (resp.status >= 400 && resp.status < 500) {
              return resp.json().then(data => {
                let err = {
                  errorMessage: data.message
                };
                throw err;
              });
            } else {
              let err = {
                errorrMessage: "Error FETCHING and parsing data from YOUR API juheard"
              };
              throw err;
            }
          }
          return resp.json();
        })
        .then(events => this.setState({
          events
        }));
    }

    componentDidMount() {
      this.loadEvents();
    }
    

    editEvent = (id) => {
      this.setState( prevState => {
          return {
            events: prevState.events.filter( e => e.id !== id)
          }
      });
    }
    
    removeEvent = (id) => {
      this.setState( prevState => {
          return {
            events: prevState.events.filter( e => e.id !== id)
          }
      });
    }

    render() {
        return ( 
          <div className ="App">

          <Header 
          title = "Eventonica!"
          siteDescript = "Welcome too all things Techtonica. We have local events nationwide Let's #BridgeTheTechGap together!" 
          />

          {this.state.events.map(events => ( 
              <EventList 
              name = {events.name} //{events.city} {events.state} {events.description}
              id = {events.id}
              removeEvent = {this.removeEvent}
              />
            ))
          }
        </div>
        )
    }
  }

export default App;