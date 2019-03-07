import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import './App.css';
import './keys.js'


const Header = (props) => {
  return ( 
       <Jumbotron>
          <h1>{props.title}</h1>
          <p>{props.siteDescript}</p>
      </Jumbotron>
  )
}

// class EventItem extends React.Component {

//   // state = {
//   //   events: this.getSingleEvent
//   // };
// }
  // extends React.Component {
//   state = {
//     events: this.getEvents
//   };

//   var events = getEvents();
//   console.log("let's go ", events);
//   }

//   function getEvents() {
//     let xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//     //     return xhr.responseText
//     //   }
//     // }
//       xhr.open('GET', 'lvh.me:3006/events/')
//       xhr.send();
//       function sendAJAX(){
//         xhr.send();
//       }
//   }
//   render (){
//     return (
//       <ul className="list">
//         {/* 1. call API to recieve a list of events... attempted above  */}
//         {/* 2. for each event on that list create an event item class... then map */}
//         {/* // info you want to get from eventful
//           // <li>
//             // <div>
//                 //<h3>Name</h3>
//                 //<address>City, State</address>
//                 //<span>Type of Event</span>
//             // </div>
//                         // < edit button />
//                         // < del button />  
//           // </li>
//         // } */} 
//       </ul>
//     )
//   }
// }




 class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      myAPIData: [],
      eventfulData: []
    };
  } 

  componentDidMount() {
    fetch('/events/')
      .then(response => response.json())
      .then(responseData =>{
        this.setState({myAPIData: responseData});
      })
      .catch(error =>{
        console.log('Error FETCHING and parsing data from YOUR API juheard', error);
      });
  }
  

  componentDidMount() {
    fetch('/events/')
      .then(response => response.json())
      .then(responseData =>{
        this.setState({eventfulData: responseData});
      })
      .catch(error =>{
        console.log('Error FETCHING and parsing data from EVENTFUL API juheard', error);
      });
  }
  
  render() {
    console.log(this.state.eventfulData)
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

// export default class App extends Component {

//   render() { 
//     return (
//       <div>
//         <div className="main-header">
//           <div className="inner">
//             <h1 className="main-title">GifSearch</h1>
//             <SearchForm />      
//           </div>   
//         </div>    
//         <div className="main-content">
//           <GifList />
//         </div>
//       </div>
//     );
//   }
// }


export default App;
