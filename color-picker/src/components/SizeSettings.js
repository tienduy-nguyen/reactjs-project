/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

//ES6
class SizeSettings extends Component {
    render() {
        return (
            <div className='card mb-3'>
                <div className="card-header text-white bg-warning">
                    <h3>Size : 15px</h3>
                </div>
                <div className="card-body">
                    <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                        <button type='button' className='btn btn-success btn-space'>Decrease</button>
                        <button type='button' className='btn btn-success btn-space'>Increase</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default SizeSettings;
