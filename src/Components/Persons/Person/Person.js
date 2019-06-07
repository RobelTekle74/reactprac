import React, { Component } from 'react';
import classes from './Person.css';
// import Radium from 'radium';



class Person extends Component {
    render () {
        console.log('[Person.js] rendering...')
        return (
            <div className={classes.Persons }>
                <p onClick={this.props.click} > 
                    I'm a {this.props.name} and I am {this.props.age} years old!
                </p>
                <p> {this.props.children} </p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </div>
        )
    }
}

// export default Radium (person);
export default Person;




    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // }

    // const person = (props) => {
    //     console.log('[Person.js] rendering...')
    //      return (
    //          <div className={classes.Persons }>
    //              <p onClick={props.click} > I'm a {props.name} and I am {props.age} years old!</p>
    //              <p> {props.children} </p>
    //              <input type="text" onChange={props.changed} value={props.name} />
    //          </div>
         
    //      )
    //  }