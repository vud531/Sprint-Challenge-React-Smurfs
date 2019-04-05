import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    console.log("--constructing smurf form--", props)
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
        
    axios
    .post('http://localhost:3333/smurfs', { 
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    .then(res => {
      console.log('congratulation', res);
      this.setState((state, prop) => {
        prop.onSubmit(res.data)
      })
    }).then(() => {
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    })
    .catch(err => {
      console.log('no new smurf for you', err);
    })
    .then(() => {
      console.log("all done")
    });
    

  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            required
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            required
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            required
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
