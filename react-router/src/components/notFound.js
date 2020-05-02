/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { connect } from 'react-redux';

//ES6
class NotFound extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               404 - Khong tim thay trang
            </div>
        )
    }
}

export default NotFound;
