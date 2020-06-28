/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//ES6
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type ==='checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onLogin = (event) =>{
        event.preventDefault();
        let {username, password} = this.state;
        if(username === 'admin' && password ==='admin'){
            localStorage.setItem('user',JSON.stringify({
                username: username,
                password:password
            }))
        }
    }

    render() {
        let { username, password } = this.state;
        let loggedinUser = localStorage.getItem('user');
        let {location} = this.props;
        if(loggedinUser !== null){
            return <Redirect to={{
                pathName : '/productions',
                state:{
                    from: location
                }
            }}></Redirect>;
        }
        return (
            <div className='row'>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form action='/login' method='post' role='form' onSubmit = {this.onLogin}>
                        <legend>Form Title</legend>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                name='username'
                                placeholder='Enter your email'
                                value={username}
                                onChange={this.onChange}
                            ></input>
                        </div>
                        <div className='form-group'>
                            <input
                                type='password'
                                className='form-control'
                                name='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={this.onChange}
                            ></input>
                        </div>
                        <button type='submit' className='btn btn-primary'>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;

