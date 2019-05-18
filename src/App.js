import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name:'Robel', age:28 },
      { name:'Fasika', age:26 },
      { name:'Beka', age:12 }
    ]
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: laughing!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;
