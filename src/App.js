//syntax to import containers: import { containername } from packagename
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// function App() {

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
