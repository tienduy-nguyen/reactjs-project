/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './taskItem';
import TaskItem from './taskItem';
//ES6
class TaskList extends Component {


    render() {
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                                <td>
                                    <select className="form-control">
                                        <option value="-1">All</option>
                                        <option value="0">Deactive</option>
                                        <option value="1">Active</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {TaskItem}
                        </tbody>
                    </table>
                </div>
            </div>



        )
    }
}

export default TaskList;
