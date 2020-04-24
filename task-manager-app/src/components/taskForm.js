/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

//ES6
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    }
  }


  onCloseForm = () => {
    this.props.onCloseForm();
  }
  onClearForm = () => {
    this.setState({
      name: '',
      state: false
    })
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    //huy bo va close form
    this.onClearForm();
    this.onCloseForm();
  }

  //cap nhat form dung setState
  //Chi chay 1 lan duy nhat
  //Chi chay khi component chua duoc mo ra
  UNSAFE_componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      })
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.task){
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      })
    } else if(!nextProps.task){
      this.setState({
        id: '',
        name: '',
        status: ''
      })
    }
  }

  render() {
    let { id } = this.state;

    return (
      <div className="card">
        <div className="card-header bg-warning">
          <h5>
            {id !== '' ? 'Update a task' : 'Add a new task'}
          </h5>
          <i className="card-header__icon-close fas fa-times-circle"
            onClick={this.onCloseForm}
          ></i>
        </div>

        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name :</label>
              <input type="text" className="form-control"
                name='name'
                value={this.state.name}
                onChange={this.onChange}

              />
            </div>
            <label>Status :</label>
            <select className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Active</option>
              <option value={false}>Deactive</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning" href='/#'
              >
                <i className="fas fa-plus mr-2"></i>Save
              </button>&nbsp;
              <button type="submit" className="btn btn-danger" href='/#'
                onClick={this.onClearForm}>
                <i className="fas fa-times mr-2"></i>Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TaskForm;
