/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import TaskControl from './components/taskControl';
import { connect } from 'react-redux';
import * as actions from './actions/index';


//ES6
class App extends Component {
  
  onToggleForm = () => {
    let { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }

    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
  }

  render() {
    return (
      <div className="container">
        <div className="text-center app__title">
          <h1 className="app__title-text">TASK MANAGER APP</h1>
          <hr />
        </div>
        <div className="row">
          <div className={this.props.isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "col-xs-0 col-sm-0 col-md-0 col-lg-0"}>
            <TaskForm></TaskForm>
          </div>
          <div className={this.props.isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <a type="button" className="btn btn-primary"
              href='/#'
              onClick={this.onToggleForm}>
              <i className="fas fa-plus mr-2"></i>Add task
              </a>

            <TaskControl></TaskControl>
            <TaskList></TaskList>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing:state.itemEditing
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
