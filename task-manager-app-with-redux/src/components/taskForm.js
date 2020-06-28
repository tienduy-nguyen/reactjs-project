/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
//ES6
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
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
      status: false
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
    this.props.onSaveTask(this.state);//goi ra trong props khai bao trong store
    this.onClearForm();
    this.onCloseForm();
  }

  //cap nhat form dung setState
  //Chi chay 1 lan duy nhat
  //Chi chay khi component chua duoc mo ra
  UNSAFE_componentWillMount() {
    if (this.props.itemEditing && this.props.itemEditing.id !== null) {
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status
      })
    } else {
      this.onClearForm();
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status
      })
    } else {
      this.onClearForm();
    }
  }

  render() {
    if (!this.props.isDisplayForm) return null;
    return (

      <div className="card">
        <div className="card-header bg-warning">
          <h5>
            {this.state.id ? 'Update a task' : 'Add a new task'}
          </h5>
          <i className="card-header__icon-close fas fa-times-circle"
            onClick={this.onCloseForm}>

          </i>
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
              onChange={this.onChange}>
              <option value={true}>Activate</option>
              <option value={false}>Deactivate</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning" href='/#'>
                <i className="fas fa-plus mr-2"></i>Save
              </button>&nbsp;
              <button type="button" className="btn btn-danger" href='/#'
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

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
