/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors : ['red','green','blue','#ccc']
        };
    }
    showColor= (color) =>{
       return {
           backgroundColor:color
       }
    }

    setActiveColor = (color) => {
        console.log(color);
    }


    render() {
        var elemColors = this.state.colors.map((color, index) => {
                return <span    key={index} 
                                style = {this.showColor(color)}
                                className = {this.props.color === color ? 'active' : ''}
                                onClick = {this.setActiveColor(color)}
                        ></span>
        })

        return (
            <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
                <div className="card  mb-3">
                    <div className="card-header text-white bg-primary">
                        <h3>Color Picker</h3>
                    </div>
                    <div className="card-body">
                        {elemColors}
                        <hr></hr>
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorPicker;
