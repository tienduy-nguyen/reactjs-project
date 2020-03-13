/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import TaskControl from './components/taskControl';


//ES6
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize : 12
    };
  }


  render() {
    return (
      <div className="container">
      <div className="text-center">
          <h1>Todo App</h1>
          <hr/>
      </div>
      <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {TaskForm}
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <a type="button" className="btn btn-primary" href='/#'>
                  <i className="fa fa-plus mr-2"></i>Add todo
              </a>
             {TaskControl}
             {TaskList}
          </div>
      </div>
  </div>
    )
  }
}

export default App;
