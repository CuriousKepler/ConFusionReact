//syntax to import containers: import { containername } from packagename
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

//making the store available to all the components by
//wrapping the MainComponent with the Provider component
//and passing store={store}as variable.
const store = ConfigureStore();

// function App() {

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
      );
  }
}
export default App;
