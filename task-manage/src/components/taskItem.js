/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

//ES6
class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }
    onUpdate = () =>{
        this.props.onUpdate(this.props.task.id);
    }
    render() {
        let { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        onClick={this.onUpdateStatus}
                        className={task.status === true
                            ? 'badge badge-success badge-status'
                            : 'badge badge-secondary badge-status'}>

                        {task.status === true ? 'Active' : 'Desactive'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" href='/#'
                            onClick={this.onUpdate}
                    >
                        <i className="fas fa-edit mr-2"></i>Edit
                    </button>
                                      &nbsp;
                    <button type="button" className="btn btn-danger" href='/#'
                        onClick={this.onDelete}>
                        <i className="fas fa-trash mr-2"
                        ></i>Remove
                    </button>
                </td>
            </tr>

        )
    }
}

export default TaskItem;
