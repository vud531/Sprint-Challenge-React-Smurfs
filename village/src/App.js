import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      // smurfForm: {
      //   id: null,
      //   name: "",
      //   age: null,
      //   height: null,
      // }
    };
  }

  componentDidMount = props => {
    console.log('--component did mount--', props);
    
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      this.setState({ smurfs: res.data });
    })
    .catch(err => {
      console.log('no smurfs for you', err);
    })
    .then(() => {
      console.log("all done")
    });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        {/* <SmurfForm 
        // smurfForm={this.state.smurfForm} 
        // onChange={this.onInputChange}
        onSubmit={this.createSmurf}
        />
        <Smurfs smurfs={this.state.smurfs} /> */}
        <nav>
          <NavLink to="/">
            Home
          </NavLink>
          </nav>
          <NavLink to="/smurf-form">
            Form
          </NavLink>
        <Route 
        exact path="/smurf-form"
        render={props => (
          <SmurfForm
          {...props}
          onSubmit={this.createSmurf}
          />
        )}
        />

        <Route 
        exact path="/"
        render={props => (
          <Smurfs
          {...props}
          smurfs={this.state.smurfs}
          />
        )}
        />
      </div>
    );
  }

  
  // onInputChange = event => {
  //   console.log('--onInputChange--')
  // }

  createSmurf = (data) => {
    console.log('--createSmurf--')
    this.setState({smurfs:data});
  }
  
}

export default App;
