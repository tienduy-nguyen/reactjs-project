/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './taskItem';
import TaskItem from './taskItem';
//ES6
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 //all, active 1, desactive -1
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.onFilter(name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value: this.state.filterStatus);
        this.setState({
            [name]: value
        })

    }

    render() {
        const { tasks } = this.props;
        let { filterName, filterStatus } = this.state;
        const elemTasks = tasks.map((task, index) => {
            return <TaskItem key={task.id}
                index={index}
                task={task}
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
            ></TaskItem>
        })

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
                                    <input type="text" className="form-control"
                                        name='filterName'
                                        value={filterName}
                                        onChange={this.onChange}

                                    />
                                </td>
                                <td>
                                    <select className="form-control"
                                        name='filterStatus'
                                        value={filterStatus}
                                        onChange={this.onChange}
                                    >
                                        <option value="-1">All</option>
                                        <option value="0">Deactive</option>
                                        <option value="1">Active</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {/* Render task item */}
                            {elemTasks}
                        </tbody>
                    </table>
                </div>
            </div>



        )
    }
}

export default TaskList;
