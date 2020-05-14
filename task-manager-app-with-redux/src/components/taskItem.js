/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

//ES6
class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }
    onEditTask = () => {
        this.props.onEditTask(this.props.task);
        this.props.onOpenForm();
    }
    render() {
        let { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td className={task.status === true ? 'task-active' : 'task-done'}>{task.name}</td>
                <td className="text-center">
                    <span
                        onClick={this.onUpdateStatus}
                        className={task.status === true
                            ? 'badge badge-success badge-status'
                            : 'badge badge-secondary badge-status'}>

                        {task.status === true ? 'Activate' : 'Deactivate'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" href='/#'
                        onClick={this.onEditTask}>
                        <i className="fas fa-edit"></i>
                    </button>
                                      &nbsp;
                    <button type="button" className="btn btn-danger" href='/#'
                        onClick={this.onDeleteTask}>
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>

        )
    }
}


const mapStateToProps = state => {
    return {

    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task))
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);

