import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/**
 * @class LoginForm
 * @extends React.Component
 */
export default class LoginForm extends Component {
  /**
   * @constructor
   * @description Creates Instance of LoginForm
   * @param {Object} props
   * @memberOf LoginForm
   */
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      isLoggedIn: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /**
   * @method onChange
   * @param {Event} event
   * @return {Object} updates State
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
   * @method onSubmit
   * @param {Event} event
   * @return {Object} new State
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.userLoginRequest(this.state);
  }
  /**
   * @return {DOM} DOM Object
   */
  render() {
    return (
      <div>
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
                name="userId"
                value={this.state.userId}
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
              <button type="submit" className="btn shadow-effect">Log in</button>
            </div>

        </form>
        <div className="row">
          <div className="col s12">
            <p className="authlinks"><Link to="/forgot-password">Forgot your password? </Link></p>
          </div>
        </div>
        <div className="disclaimer">
          <div>
            <span>
              <img src="/img/NCUAlogo.png" width="100" height="100" />
            </span>
          </div>
          <div className="disclaimer-right">
            <img src="/img/norton.png" width="100" height="50" />
            <span>
              A user ID and password is required to log in to our services. Services is provided through a
                secured connection.
                If you have difficulty logging in please click on the forgot your password link
            </span>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
};
