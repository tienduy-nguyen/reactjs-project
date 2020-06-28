import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit,
  setAllowRegistrartion,
} from '../../actions/settingsAction';

class Settings extends Component {
  allowRegistrationChange = (event) => {
    const { setAllowRegistrartion } = this.props;
    setAllowRegistrartion();
  };
  disableBalanceOnAddChange = (event) => {
    const { setDisableBalanceOnAdd } = this.props;
    setDisableBalanceOnAdd();
  };
  disableBalanceOnEditChange = (event) => {
    const { setDisableBalanceOnEdit } = this.props;
    setDisableBalanceOnEdit();
  };
  render() {
    const {
      disableBalanceOnAdd,
      disableBalanceOnEdit,
      allowRegistration,
    } = this.props.settings;
    return (
      <div>
        <div className='row'>
          <div className='col-md-6 col-lg-6'>
            <Link to='/' className='btn btn-link'>
              <i className='fas fa-arrow-circle-left'></i> Back To Dashboard
            </Link>
          </div>
        </div>
        <div className='card'>
          <div className='card-header'>Edit Settings</div>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label>Allow Registration</label>{' '}
                <input
                  type='checkbox'
                  name='allowRegistration'
                  checked={!!allowRegistration}
                  onChange={this.allowRegistrationChange}
                ></input>
              </div>
              <div className='form-group'>
                <label>Disable Balance On Add</label>{' '}
                <input
                  type='checkbox'
                  name='disableBalanceOnAdd'
                  checked={!!disableBalanceOnAdd}
                  onChange={this.disableBalanceOnAddChange}
                ></input>
              </div>
              <div className='form-group'>
                <label>Disable Balance On Edit</label>{' '}
                <input
                  type='checkbox'
                  name='disableBalanceOnEdit'
                  checked={!!disableBalanceOnEdit}
                  onChange={this.disableBalanceOnEditChange}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistrartion: PropTypes.func.isRequired,
};

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings,
  }),
  { setAllowRegistrartion, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
