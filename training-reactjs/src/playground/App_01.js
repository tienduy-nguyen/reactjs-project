import React , { Component } from 'react';
import './App.css';
import Header from '../components/header';
import Product from '../components/product';

//ES6
class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <div className='row'>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                  <Product/>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                  <Product/>
            </div>
        </div>
      </div>
    )
  }
}


//Old method
// function App() {
//   return (
//     <div>
//         <h1>AppComponent</h1>
//         <Header/>
//     </div>
//   );
// }

export default App;
