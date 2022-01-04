//syntax to import containers: import { containername } from packagename
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import Dishdetail from './components/DishdetailComponent';
import { DISHES } from './shared/dishes';


// function App() {

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect=(dishId)=>{
        this.setState({selectedDish:dishId});
    }


  render() {
    return (
      <div>
        <Navbar dark color="danger">
          <div className='container'>
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes} 
            onClick={(dishId)=>this.onDishSelect(dishId)} />
        <Dishdetail 
        // for each dish, this matches the dishid with the selected
        // dish id 
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)} />
      </div>
    );
  }
}
export default App;
