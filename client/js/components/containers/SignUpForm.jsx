import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Router } from 'react-router-dom';
import history from '../../utils/history';


/**
 * @class SignupForm
 */
export default class SignupForm extends Component {
  /**
   * @constructor
   * @param {State} props
   */
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      userId: '',
      username: '',
      password: '',
      gender: 'male',
      address: '',
      identificationNumber: '',
      dob: '',
      phone: '',
      city: '',
      state: '',
      province: '',
      maritalStatus: '',
      nationality: '',
      accountNumber: '',
      accountType: '',
      zipcode: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    this.props.userSignupRequest(this.state);
  }
  /**
   * @return {Object} Returns DOM element
   */
  render() {
    return (
        <div>
          <h4 className="heading">Admin can create a user here</h4>
          <form onSubmit={this.onSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label htmlFor="firstname">Firstname</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  id="firstname"
                  required
                  value={this.state.firstname}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group col-md-6">
              <label htmlFor="lastname">Lastname</label>
                <input
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  type="text"
                  required
                  value={this.state.lastname}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
              <label htmlFor="userId">Email :</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label htmlFor="userId">User ID</label>
                <input
                  className="form-control"
                  type="number"
                  pattern="[0-9]*"
                  title="e.g. 0-9"
                  name="userId"
                  id="userId"
                  required
                  value={this.state.userId}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group col-md-6">
              <label htmlFor="username">Username</label>
                <input
                  className="form-control"
                  name="username"
                  id="username"
                  type="text"
                  required
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label htmlFor="password">Password:</label>
                <input
                  className="form-control"
                  name="password"
                  id="password"
                  type="password"
                  pattern=".{5,10}"
                  required
                  title="Password must be between 5 and 10 characters"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="identificationNumber" >Identification NO:</label>
                <input
                  className="form-control"
                  name="identificationNumber"
                  id="identificationNumber"
                  type="number"
                  pattern="[0-9]*"
                  title="e.g. 0-9"
                  required
                  value={this.state.identificationNumber}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label htmlFor="dob" >Date of birth:</label>
                <input
                  className="form-control"
                  name="dob"
                  id="dob"
                  type="text"
                  pattern="\d{1,2}/\d{1,2}/\d{2,4}"
                  title="e.g. dd/mm/yyyy"
                  required
                  value={this.state.dob}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group col-md-6">
              <label htmlFor="gender">Gender :</label>
                <select className="form-control" id="gender" name="gender" required='true' value={this.state.gender} onChange={this.onChange}>
                  <option value="male" defaultValue>Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label htmlFor="address">Address:</label>
                <input
                  className="form-control"
                  name="address"
                  id="address"
                  type="text"
                  required
                  value={this.state.address}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="phone">Phone NO:</label>
                <input
                  className="form-control"
                  name="phone"
                  id="phone"
                  type="text"
                  required
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="city">City:</label>
                <input
                  className="form-control"
                  name="city"
                  id="city"
                  type="text"
                  required
                  value={this.state.city}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="state">State:</label>
                <input
                  className="form-control"
                  name="state"
                  id="state"
                  type="text"
                  required
                  value={this.state.state}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label htmlFor="provice">province:</label>
                <input
                  className="form-control"
                  name="province"
                  id="province"
                  type="text"
                  required
                  value={this.state.province}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="maritalStatus">Marital Status:</label>
                <input
                  className="form-control"
                  name="maritalStatus"
                  id="maritalStatus"
                  type="text"
                  required
                  value={this.state.maritalStatus}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label htmlFor="nationality">Nationality:</label>
                <input
                  className="form-control"
                  name="nationality"
                  id="nationality"
                  type="text"
                  required
                  value={this.state.nationality}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="accountNumber" >Account Number :</label>
                <input
                  className="form-control"
                  name="accountNumber"
                  id="accountNumber"
                  type="number"
                  pattern="[0-9]*"
                  title="e.g. 0-9"
                  required
                  value={this.state.accountNumber}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label htmlFor="accountType" >Account Type:</label>
                <input
                  className="form-control"
                  name="accountType"
                  id="accountType"
                  type="text"
                  required
                  value={this.state.accountType}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="zipcode" >Zip Code:</label>
                <input
                  className="form-control"
                  name="zipcode"
                  id="zipcode"
                  type="number"
                  pattern="[0-9]*"
                  title="e.g. 0-9"
                  required
                  value={this.state.zipcode}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="row form-cta">
              <button type="submit" className="btn shadow-effect" href="#">Submit</button>
            </div>
          </form>
          <div className="disclaimer" style={{marginTop: 20}}>
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
                If you have difficulty creating a user please contact your site administrator.
            </span>
            </div>
          </div>
        </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};
