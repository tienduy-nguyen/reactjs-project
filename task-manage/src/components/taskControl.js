/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import Search from './search';
import Sort from './sort';


//ES6
class TaskControl extends Component {

    render() {
        return (
            <div className="row mt-15">
                {/* Search */}
                {Search}

                {/* Sort */}
                {Sort}
            </div>
        )
    }
}

export default TaskControl;
