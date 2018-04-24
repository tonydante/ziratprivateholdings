import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Router } from 'react-router-dom';
import history from '../../utils/history';


/**
 * @class SignupForm
 */
export default class AdminSignupForm extends Component {
  /**
   * @constructor
   * @param {State} props
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    $(document).ready(function () {
      $('select').material_select();
    });
  }
  /**
   *
   * @param {Event} event
   * @return {state} sets state of button
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   *
   * @param {Event} event
   * @return {state} updates state
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.adminSignupRequest(this.state);
  }
  /**
   * @return {Object} Returns DOM element
   */
  render() {
    return (
      <div>
        <div className="row">
          <h4 className="heading">You can create an admin user here</h4>
          <form className="row" onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">@</span>
            </div>
            <input 
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="username"
              value={this.state.username}
              required
              onChange={this.onChange}
            />
          </div>
          <div className="input-group mb-3">
          <input 
            type="password"
            name="password"
            value={this.state.password}
            className="form-control"
            aria-label="Password"
            required
            onChange={this.onChange}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">password</span>
          </div>        
        </div>
      
          <div className="form-cta">
            <button type="submit" className="btn shadow-effect" >Log in</button>
          </div>

      </form>
          <div className="disclaimer" style={{marginTop: 20 }}>
            <div>
              <span>
                <img src="/img/NCUAlogo.png" width="100" height="100" />
              </span>
            </div>
            <div className="disclaimer-right">
              <img src="/img/norton.png" width="100" height="50" />
              <span>
                Services is provided through a
                secured connection.
                If you have difficulty create an admin please contact the site administrator.
            </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AdminSignupForm.propTypes = {
  adminSignupRequest: PropTypes.func.isRequired
};
