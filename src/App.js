import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>COCreport.io</h1>
        <Button color="danger">Send Report</Button>
      </div>
    );
  }
}

export default App;
