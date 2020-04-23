/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import TaskControl from './components/taskControl';
import removeAccents from './util/removeAccents';


//ES6
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],//id unique name
      isDisplayForm: false,
      taskEditting: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: 'name',
      sortValue: 1
    };
  };
  //Su dung life cycle cua reactjs de doc tu localstorage
  //DUng de cap nhat form
  UNSAFE_componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  };

  onToggleForm = () => {
    //Them task
    if (this.state.isDisplayForm) { //&& this.state.taskEditting !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditting: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditting: null
      });
    }

  };

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };
  generateID() {
    return this.s4() + this.s4() + this.s4() + '-' + this.s4() + this.s4() + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  };
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })

  };
  onSubmit = (data) => {

    let { tasks } = this.state;
    if (data.id === '') {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      let index = this.findIndex(data.id);
      tasks[index].name = data.name;
      tasks[index].status = data.status;
    }

    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));

  };
  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
    }
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));

  };
  findIndex = (id) => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    })
    return result;
  };
  onDelete = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onCloseForm();
  };
  onUpdate = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    let taskEditting = tasks[index];
    this.setState({
      taskEditting: taskEditting
    });
    this.onShowForm();
    //Se cap nhat trong onSubmit
  };

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  };

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName,
        status: filterStatus
      }
    });
  };
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    })
  };
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
    console.log(sortValue)
  }


  render() {
    //Tao ra 1 bien de lay ra task
    let { tasks,
      isDisplayForm,
      taskEditting,
      filter,
      keyword,
      sortBy,
      sortValue } = this.state; // const tasks = this.state.tasks



    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          let taskName = removeAccents(task.name.toLowerCase());
          let taskNameFilter = removeAccents(filter.name.toLowerCase());
          return taskName.indexOf(taskNameFilter) !== -1;
        })
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return tasks;
        }
        return task.status === (filter.status === 1 ? true : false)
      })
    }
    if (keyword) {
      tasks = tasks.filter((task) => {
        let taskName = removeAccents(task.name.toLowerCase());
        let keywordFilter = removeAccents(keyword.toLowerCase());

        return taskName.indexOf(keywordFilter) !== -1;
      })
    }
    if (sortBy === 'name') {
      tasks.sort((a, b) => {
        let aNoAccent = removeAccents(a.name.toLowerCase());
        let bNoAccent = removeAccents(b.name.toLowerCase());
        if (aNoAccent > bNoAccent) return sortValue;
        else if (aNoAccent < bNoAccent) return -sortValue;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortValue;
        else if (a.status < b.status) return +sortValue;
        else return 0;
      });
    };



    let elemTaskForm = isDisplayForm
      ? <TaskForm onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
        task={taskEditting}
      ></TaskForm> : '';

    return (
      <div className="container">
        <div className="text-center app__title">
          <h1 className="app__title-text">TASK MANAGER APP</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "col-xs-0 col-sm-0 col-md-0 col-lg-0"}>
            {elemTaskForm}
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <a type="button" className="btn btn-primary"
              href='/#'
              onClick={this.onToggleForm}>
              <i className="fas fa-plus mr-2"></i>Add task
              </a>

            <TaskControl onSearch={this.onSearch}
              onSort={this.onSort}
              sortBy={sortBy}
              sortValue={sortValue}
            ></TaskControl>
            <TaskList tasks={tasks}
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            ></TaskList>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
