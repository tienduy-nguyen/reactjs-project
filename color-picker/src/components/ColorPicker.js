/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

class ColorPicker extends Component {
    //Tao ra contructor chua cac ma mau
    //State nam trong contructor
    //Color nay tao ra thi phai gui sang app.js
    constructor(props){
        super(props);
        this.state = {
            colors : ['red','green','blue','#ccc']
        };
    }
    showColor(color){
       return {
           backgroundColor:color
       }
    }

    setActiveColor = (color) => {
        // console.log(this.props.color);
        //props la thuoc tinh cua component
        //state la trang thai cua component
        //trong app.js ta da khai bao state cua component color picker co thuoc tinh onReceiveColor
        //vi vay bay h ta co the su dung this.props.onReceieve color de goi no ra
        this.props.onReceiveColor(color);
        
    }


    render() {
        //Tao ra danh sach cac the span chua ma mau
        var elemColors = this.state.colors.map((color, index) => {
                return <span    key={index} 
                                style = {this.showColor(color)} //Khai bao style giong trong css
                                className = {this.props.color === color ? 'active' : ''}
                                //className: chinh la class trong css
                                onClick = {() => this.setActiveColor(color)}
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
