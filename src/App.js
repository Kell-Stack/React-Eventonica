import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import './App.css';
import './keys.js';
// import EventList from './EventList.js';


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
              <ul>
                <button className="edit-event" onClick={ () => props.editEvent(props.id)}>EDIT</button>
                  {props.name}
                <button className="remove-event" onClick={ () => props.removeEvent(props.id)}>✖</button>
                  {props.name}
              </ul>
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



    // componentDidMount() {
    //   fetch('/events')
    //     .then(response => response.json())
    //     .then(responseData =>{
    //       this.setState({API: responseData});
    //     })
    //     .catch(error =>{
    //       console.log('Error FETCHING and parsing data from YOUR API juheard caw caw', error);
    //     });
    // }
    


    // loadEvents() {
    //   fetch(API)
    //     .then(resp => {
    //       if (!resp.ok) {
    //         if (resp.status >= 400 && resp.status < 500) {
    //           return resp.json().then(data => {
    //             let err = {
    //               errorMessage: data.message
    //             };
    //             throw err;
    //           });
    //         } else {
    //           let err = {
    //             errorrMessage: "Error FETCHING and parsing data from YOUR API juheard"
    //           };
    //           throw err;
    //         }
    //       }
    //       return resp.json();
    //     })
    //     .then(events => this.setState({
    //       events
    //     }));
    // }


    componentDidMount() {
      this.loadEvents();
    }
    // handleRemoveEvents = (id) => {
    //   this.setState( prevState => {
    //       return {
    //         events: prevState.events.filter( e => e.id !== id)
    //       }
    //   });
    // }

    render() {
        return ( 
          <div className ="App">

          <Header title = "Eventonica!"
          siteDescript = "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information." 
          />

          {this.state.events.map(events => ( 
              <EventList 
              name = {events.name}
              city = {events.city}
              state = {events.state}
              desc = {events.description}
              />
            ))
          }
        </div>
        )
    }
  }

export default App;