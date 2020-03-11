/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

//ES6
class SizeSettings extends Component {
    changeSize(value){
        this.props.onChangeSize(value);
    }
    render() {
        return (
            <div className='card mb-3'>
                <div className="card-header text-white bg-warning">
                    <h3>Size : {this.props.fontSize}px</h3>
                </div>
                <div className="card-body">
                    <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                        <button type='button' className='btn btn-success btn-space' onClick={() => this.changeSize(-2)}>Decrease</button>
                        <button type='button' className='btn btn-success btn-space' onClick={() => this.changeSize(2)}>Increase</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default SizeSettings;
