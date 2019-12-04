import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../Context/auth-context'
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'asdfg', name:'Robel', age:28 },
      { id: 'zxcvbn', name:'Fasika', age:26 },
      { id: 'qwertyu', name:'Beka', age:12 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

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

    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter + 1
      }
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated:true})
  }

  deletePersonHandler = (personIndex) => {
    
    // this is the best way to fix the flaud by using an es6 method called SPREAD OPERATOR
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  render () {
   console.log('[App.js] render')

    let persons = null;


    if ( this.state.showPersons ) {
      persons = 
          <Persons 
          persons = {this.state.persons} 
          clicked = {this.deletePersonHandler} 
          changed = {this.nameChangedHandler} 
          isAuthenticated = {this.state.authenticated}
        />
        
    }
    
    return (
      // <StyleRoot>
      <Aux>
        <button
          onClick={()=>{
            this.setState({ showCockpit: false});
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }} 
        >
        {this.state.showCockpit ? (
          <Cockpit
            clicked={this.togglePersonHandler}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons}
          />
        ) : null}
        {persons}
        </AuthContext.Provider>
      </Aux>
    )
  }
}

export default withClass(App, styles.App);




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

 // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // ':hover' : {
    //   //   backgroundColor: 'lightgreen',
    //   //   colot: 'black'
    //   // }
    // };
// style.backgroundColor = 'red';
      // style [':hover'] = {
      //   backgroundColor: 'salmon',
      //   colot: 'black'
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

  // this method has a flaud because it mutates the original state
    // const persons = this.state.persons;

    // this could be one of the fixes using just regular js
    //  cont persons = this.state.persons.slice()
