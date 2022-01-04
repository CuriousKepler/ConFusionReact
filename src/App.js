//syntax to import containers: import { containername } from packagename
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import Dishdetail from './components/DishdetailComponent';
import './App.css';
import { DISHES } from './shared/dishes';


// function App() {

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="danger">
          <div className='container'>
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes} />

        <Dishdetail dishes={this.state.dish} />
      </div>
    );
  }
}
export default App;
