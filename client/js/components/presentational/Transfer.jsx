import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { logout, transfer } from '../../actions/user';

/**
   *
   * @desc This a Transfer class
   */class Transfer extends Component {
  /**
    * @constructor
    * @description Creates Instance of LoginForm
    * @param {Object} props
    * @memberOf LoginForm
    */
  constructor(props) {
    super(props);
    this.state = {
      receiverBank: '',
      receiverName: '',
      receiverAccountNumber: '',
      email: '',
      swiftCode: '',
      ibanNumber: '',
      accountNumber: '',
      amountToTransfer: '',
      transferDescription: ''
    };
    this.baseState = this.state;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.logout = this.logout.bind(this);
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
    this.props.transfer(this.state);
  }

  /**
   * @method resetForm
   *
   * @memberof EditClient
   *
   * @returns {void}
   */
  resetForm() {
    this.setState({
      ...this.state
    });
  }

  /**
   *
   * @param {any} event
   * @memberof NavigationBar
   * @returns {void}
   * @desc this function removes token from localstorage and logs out the user
   */
  logout(event) {
    event.preventDefault();
    this.props.logout();
  }

  /**
   *
   * @param {any} event
   * @memberof NavigationBar
   * @returns {void}
   * @desc this function removes token from localstorage and logs out the user
   */
  render() {
    return (
      <div className="dashboard-container">
        <div className="main-wrapper">
          <header>
            <div id="slide-out" className="side-nav fixed">
              <div className="side-nav-section logo">
                <Link to="/" className="brand-logo logo">
                  <img src="/img/logo_new.png" alt="ABNB" height="30" />
                </Link>
              </div>
              <nav className="nav">
                <NavLink exact to="/dashboard" className="nav-link">
                Account Summary
                  {' '}
                </NavLink>
                <NavLink exact to="/transactions" className="nav-link">
                  Recent Transactions
                </NavLink>
                <NavLink exact to="/transfer" className="nav-link">
                  Make Transfer
                </NavLink>
                <NavLink exact to="/accountdetails" className="nav-link">
                  Account Details
                </NavLink>
                <a onClick={this.logout} className="nav-link logout-btn">
                  Logout
                </a>
              </nav>
            </div>
          </header>
          <main>
            <div className="welcome-caption">
              <span className="float-header-with-flex" />
              <span>
                <h4>
                Hello,
                  {' '}
                  {this.props.userdetail.username}
                  </h4>
              </span>
            </div>
            <div className="account-summary-container">
              <div className="account-summary-section">
                <div>
                  <h4>
                  Hi
                    {' '}
                    {this.props.userdetail.username}
                    {' '}
                  please fill the form below to make your transfer
                  </h4>
                </div>
                <div>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-row">

                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">
                          Receiver's Bank Name:
                          {' '}
                        </label>
                        <input
                          type="text"
                          name="receiverBank"
                          value={this.state.receiverBank}
                          className="form-control"
                          required
                          onChange={this.onChange}
                          autoComplete="on"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">
                          Receiver's Name:
                          {' '}
                        </label>
                        <input
                          type="text"
                          name="receiverName"
                          value={this.state.receiverName}
                          className="form-control"
                          required
                          onChange={this.onChange}
                          autoComplete="on"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="receiverAccountNumber">
                          Receiver's Account Number:
                          {' '}
                        </label>
                        <input
                          type="number"
                          name="receiverAccountNumber"
                          pattern="[0-9]*"
                          value={this.state.receiverAccountNumber}
                          className="form-control"
                          required
                          onChange={this.onChange}
                          autoComplete="on"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="email">
                          Email:
                          {' '}
                        </label>
                        <input
                          type="text"
                          name="email"
                          value={this.state.email}
                          className="form-control"
                          required
                          onChange={this.onChange}
                          autoComplete="on"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="swiftCode">
                          SWIFT Code:
                          {' '}
                        </label>
                        <input
                          type="number"
                          name="swiftCode"
                          value={this.state.swiftCode}
                          className="form-control"
                          required
                          onChange={this.onChange}
                          autoComplete="on"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="ibanNumber">
                          Routing Number:
                          {' '}
                        </label>
                        <input
                          type="number"
                          name="ibanNumber"
                          pattern="[0-9]*"
                          value={this.state.ibanNumber}
                          className="form-control"
                          required
                          onChange={this.onChange}
                          autoComplete="on"
                        />
                      </div>
                      <div className="input-group mb-3 ">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            $
                          </span>
                        </div>
                        <input
                          type="number"
                          name="amountToTransfer"
                          pattern="[0-9]*"
                          value={this.state.amountToTransfer}
                          className="form-control"
                          required
                          onChange={this.onChange}
                          autoComplete="on"
                          placeholder="Amount to transfer"
                        />
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          Transfer Description:
                          {' '}
                        </span>
                      </div>
                      <textarea
                        className="form-control"
                        name="transferDescription"
                        value={this.state.transferDescription}
                        required
                        onChange={this.onChange}
                        aria-label="With textarea" 
                      />
                    </div>
                    <div className="update-form-cta">
                      <button type="reset" onClick={this.resetForm} className="btn shadow-effect">
                       Reset
                      </button>
                      <button type="submit" className="btn shadow-effect update-btn">
                        Complete Trasnsfer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  userdetail: state.setCurrentUser.user,
  logout: PropTypes.func.isRequired,

});
Transfer.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout, transfer })(Transfer);
