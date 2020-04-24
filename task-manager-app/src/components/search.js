/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

//ES6
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
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

export default Search;
