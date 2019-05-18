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

  switchNameHandler = (newName) => {
    // console.log('was clicked')
    // dont tdo this --> this.state.persons[0].name= "Roberto";
    // this ^^^ is a bad sytax as it might mutate the state and make it inpure
    this.setState ({
      persons: [
        { name:newName, age:28 },
        { name:'Fasika', age:25 },
        { name:'Beka', age:12 }
    ] })
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <button onClick={() => this.switchNameHandler()} >Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click= {this.switchNameHandler.bind(this, 'roba')} >My Hobbies: laughing!</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;



// When using hooks use this sytax
  // const App = props => {
  // const [ personsState, setPersonsState ] = useState({
  //   persons: [
  //     { name:'Robel', age:28 },
  //     { name:'Fasika', age:26 },
  //     { name:'Beka', age:12 }
  //   ]
  // })

  // const switchNameHandler = () => {
  //   //   // console.log('was clicked')
  //   //   // dont tdo this --> this.state.persons[0].name= "Roberto";
  //     setPersonsState ({
  //       persons: [
  //         { name:'Roberto', age:28 },
  //         { name:'Fasika', age:25 },
  //         { name:'Beka', age:12 }
  //     ] })
  //   }


  
  //   return (
  //     <div className="App">
  //       <h1>Hi, I'm a react app.</h1>
  //       <button onClick={switchNameHandler} >Switch Name</button>
  //       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
  //       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: laughing!</Person>
  //       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
  //     </div>
  //   )
  // }