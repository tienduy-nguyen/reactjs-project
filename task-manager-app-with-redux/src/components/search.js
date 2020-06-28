/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

//ES6
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }
    onChange = (event) => {
        this.setState({
            keyword: event.target.value
        })
    }
    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        name="keyword"
                        value={this.state.keyword}
                        onChange={this.onChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter a key..."
                        style={{ minWidth: '160px' }} />
                    <span className="input-group-btn">
                        <button className="btn btn-primary"
                            onClick={this.onSearch}
                            type="button"
                            style={{ marginLeft: '4px' }}>
                            <span className="fas fa-search mr-2" ></span>Search
                </button>
                    </span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks, //State lay trong reducers/index --> no se duoc chuyen thanh props cua component
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actions.searchTask(keyword))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

