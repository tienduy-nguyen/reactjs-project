/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

//ES6
class TaskItem extends Component {

    render() {
        return (

            <tr>
                <td>1</td>
                <td>Learn to code</td>
                <td className="text-center">
                    <span className="label label-success">
                        Active
                                              </span>
                </td>
                <td className="text-center">
                    <a type="button" className="btn btn-warning" href='/#'>
                        <i className="fa fa-pencil mr-2"></i>Edit
                                      </a>
                                      &nbsp;
                                      <a type="button" className="btn btn-danger" href='/#'>
                        <i className="fa fa-trash mr-2"></i>Remove
                                      </a>
                </td>
            </tr>
        )
    }
}

export default TaskItem;
