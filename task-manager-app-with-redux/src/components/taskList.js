/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './taskItem';
import TaskItem from './taskItem';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import removeAccents from '../util/removeAccents';


//ES6
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 //all, active 1, desactive -1
            //De su dung trong form
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter);
        this.setState({
            [name]: value
        })
        // console.log(this.state);

    }

    render() {
        let { tasks, filterTable, keyword, sort } = this.props; //Duoc lay ra trong reducers

        //Filter table
        if (filterTable) {
            if (filterTable.name) {
                tasks = tasks.filter((task) => {
                    let taskName = removeAccents(task.name.toLowerCase());
                    let taskNameFilter = removeAccents(filterTable.name.toLowerCase());
                    return taskName.indexOf(taskNameFilter) !== -1;
                })
            }
            tasks = tasks.filter((task) => {
                if (filterTable.status === -1) {
                    return tasks;
                }
                return task.status === (filterTable.status === 1 ? true : false)
            })
        }


        //Search
        if (keyword) {
            tasks = tasks.filter((task) => {
                let taskName = removeAccents(task.name.toLowerCase());
                let keywordFilter = removeAccents(keyword.toLowerCase());

                return taskName.indexOf(keywordFilter) !== -1;
            })
        }

        //Sort
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                let aNoAccent = removeAccents(a.name.toLowerCase());
                let bNoAccent = removeAccents(b.name.toLowerCase());
                if (aNoAccent > bNoAccent) return sort.value;
                else if (aNoAccent < bNoAccent) return -sort.value;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return +sort.value;
                else return 0;
            });
        };


        const elemTasks = tasks.map((task, index) => {
            return <TaskItem key={task.id}
                index={index}
                task={task}
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
                                        value={filterTable.name ?? ''}
                                        onChange={this.onChange}

                                    />
                                </td>
                                <td>
                                    <select className="form-control"
                                        name='filterStatus'
                                        value={filterTable.status ?? -1}
                                        onChange={this.onChange}
                                    >
                                        <option value="-1">All</option>
                                        <option value="0">Deactivate</option>
                                        <option value="1">Activate</option>
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

//Trong redux ho tro chuyen cac state cua store thanh cac props cua component
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks, //State lay trong reducers/index --> no se duoc chuyen thanh props cua component
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sort
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
