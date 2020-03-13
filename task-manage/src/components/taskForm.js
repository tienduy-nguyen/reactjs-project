/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

//ES6
class TaskForm extends Component {


  render() {
    return (
        <div className="card">
                  <div className="card-header bg-warning">
                      <h5>Add new todo</h5>
                  </div>
                  <div className="card-body">
                      <form>
                          <div className="form-group">
                              <label>Name :</label>
                              <input type="text" className="form-control" />
                          </div>
                          <label>Status :</label>
                          <select className="form-control" required="required">
                              <option value="1">Active</option>
                              <option value="0">Deactive</option>
                          </select>
                          <br/>
                          <div className="text-center">
                              <a type="submit" className="btn btn-warning" href='/#'>
                                <i className="fa fa-plus mr-2"></i>Save
                              </a>&nbsp;
                              <a type="submit" className="btn btn-danger" href='/#'> 
                                <i className="fa fa-close mr-2"></i>Cancel
                              </a>
                          </div>
                      </form>
                  </div>
              </div>
    )
  }
}

export default TaskForm;
