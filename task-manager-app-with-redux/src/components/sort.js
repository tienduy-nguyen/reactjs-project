/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

//ES6
class Sort extends Component {
    onClick = (sortBy, sortValue) => {
        let sort = {
            by: sortBy,
            value: sortValue
        }
        this.props.onSort(sort);
    }
    render() {
        let sortBy = this.props.sort.by || 'status';
        let sortValue = this.props.sort.value || 1;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary" type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true">
                        Sort <span className="far fa-caret-square-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a role="button" href='/#'

                            >
                                <i className="fas fa-sort-alpha-down p-r-5"></i>
                                Name A-Z
                                <i
                                    className={(sortBy === 'name' && sortValue === 1) ? 'fas fa-check ml-2 sort_selected-icon' : ''}

                                ></i>
                            </a>

                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a role="button" href='/#'>
                                <i className="fas fa-sort-alpha-down-alt p-r-5"></i>
                                Name Z-A
                                <i
                                    className={(sortBy === 'name' && sortValue === -1) ? 'fas fa-check ml-2 sort_selected-icon' : ''}
                                ></i>
                            </a>

                        </li>
                        <hr />
                        <li onClick={() => this.onClick('status', 1)}>
                            <a role="button" href='/#'

                            >Status activate
                             <i className={(sortBy === 'status' && sortValue === 1) ? 'fas fa-check ml-2 sort_selected-icon' : ''}
                                ></i>
                            </a></li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a role="button" href='/#'>
                                Status deactivate
                             <i className={(sortBy === 'status' && sortValue === -1) ? 'fas fa-check ml-2 sort_selected-icon' : ''}

                                ></i>

                            </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sort: state.sort //lay ra tu action
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);