import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.css'
import AuthContext from '../../Context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null)
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated)

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // can make HTTp requests from here...
        // setTimeout(() => {
        //     // alert('Saved data to cloud!');
        // }, 1000);\
        toggleBtnRef.current.click()
        return()=> {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);

    useEffect (() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    }, []);

    const classes = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass= styles.Red;
    }
    if ( props.personsLength <= 2) {
      classes.push(styles.red);
    }
    if ( props.personsLength <= 1) {
      classes.push(styles.bold);
    }

    return(
        <div className={styles.Cockpit}>
            <h1>Hi, I'm a react app.</h1>
            <p className={classes.join( ' ' )}>This is really working!</p>
            <button 
                ref={toggleBtnRef}
                className =  {btnClass}
                // style={style}
                onClick={props.clicked} >Toggle Persons
            </button>
                <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(Cockpit);