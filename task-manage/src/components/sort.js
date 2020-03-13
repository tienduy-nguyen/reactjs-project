/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

//ES6
class Sort extends Component {

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a role="button" href='/#'>
                                    <i className="fa fa-sort-alpha-asc pr-5">
                                        A-Z
                                    </i>
                                </a>
                    </li>
                    <li>
                        <a role="button" href='/#'>
                                    <i className="fa fa-sort-alpha-desc pr-5">
                                        Z-A
                                    </i>
                                </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a role="button" href='/#'>Status Active</a></li>
                    <li><a role="button" href='/#'>Status Deactive</a></li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Sort;
