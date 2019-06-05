import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'asdfg', name:'Robel', age:28 },
      { id: 'zxcvbn', name:'Fasika', age:26 },
      { id: 'qwertyu', name:'Beka', age:12 }
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('was clicked')
  //   // dont tdo this --> this.state.persons[0].name= "Roberto";
  //   // this ^^^ is a bad sytax as it might mutate the state and make it inpure
  //   this.setState ({
  //     persons: [
  //       { name:newName, age:28 },
  //       { name:'Fasika', age:25 },
  //       { name:'Beka', age:12 }
  //   ] })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // this method has a flaud because it mutates the original state
    // const persons = this.state.persons;

    // this could be one of the fixes using just regular js
    //  cont persons = this.state.persons.slice()

    // this is the best way to fix the flaud by using an es6 method called SPREAD OPERATOR
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover' : {
      //   backgroundColor: 'lightgreen',
      //   colot: 'black'
      // }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div> 
      )

      style.backgroundColor = 'red';
      // style [':hover'] = {
      //   backgroundColor: 'salmon',
      //   colot: 'black'
      // }
    }
    
    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <button 
        style={style}
        onClick={this.togglePersonHandler} >Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App;
// export default Radium (App);



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


  
  // {
  //   this.state.showPersons === true ?
  //     <div>
  //       <Person 
  //       name={this.state.persons[0].name} 
  //       age={this.state.persons[0].age} />
  //       <Person 
  //       name={this.state.persons[1].name} 
  //       age={this.state.persons[1].age}
  //       click= {this.switchNameHandler.bind(this, 'roba')} 
  //       changed= {this.nameChangedHandler}>My Hobbies: laughing!</Person>
  //       <Person 
  //       name={this.state.persons[2].name} 
  //       age={this.state.persons[2].age} />
  //     </div> 
  //   : null
  // }



  // <Person 
  //         name={this.state.persons[0].name} 
  //         age={this.state.persons[0].age} />
  //         <Person 
  //         name={this.state.persons[1].name} 
  //         age={this.state.persons[1].age}
  //         click= {this.switchNameHandler.bind(this, 'roba')} 
  //         changed= {this.nameChangedHandler}>My Hobbies: laughing!</Person>
  //         <Person 
  //         name={this.state.persons[2].name} 
  //         age={this.state.persons[2].age} />