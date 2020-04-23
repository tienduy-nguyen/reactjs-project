/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

//ES6
class Sort extends Component {
    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
    }
    render() {
        let sortBy = this.props.sortBy;
        let sortValue = this.props.sortValue;
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

                            >Status Active
                             <i className={(sortBy === 'status' && sortValue === 1) ? 'fas fa-check ml-2 sort_selected-icon' : ''}
                                ></i>
                            </a></li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a role="button" href='/#'>
                                Status Deactive
                             <i className={(sortBy === 'status' && sortValue === -1) ? 'fas fa-check ml-2 sort_selected-icon' : ''}

                                ></i>

                            </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sort;
