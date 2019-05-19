import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Models/UserInput/UserInput';
import UserOutput from './Models/UserOutput/UserOutput';


class App extends Component{

  state = {
      name: "Dave",
      name2: "Sandy"
  };

  switchNameHandler = (event) => {
    this.setState({
      name: event.target.value,
      name2: "Sandy"
    })
  }

  render(){
    const style = {
      backgroundColor: 'black',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      color: 'white',
      cursor: 'pointer'
    
    };

  return(
    <div className="App">
      <UserInput 
        changed={this.switchNameHandler}
        name={this.state.name}
      />
      <div style={style}>
      <UserOutput 
        name={this.state.name}
        name2={this.state.name2}
      />
      </div>
      </div>
  );
}
}

export default App;