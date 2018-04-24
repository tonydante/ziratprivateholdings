import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getUserAccDetails, logout } from '../../actions/user';
import AccountInfo from '../containers/AccountInfo';

class AccountDetails extends Component {
  /**
  * Creates Instance of UpdateProfilePage
  * @param {Object} props
  * @memberOf UpdateProfilePage
  */
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.userAccDetails.firstname,
      lastname: this.props.userAccDetails.lastname,
      username: this.props.userAccDetails.username,
      email: this.props.userAccDetails.email,
      gender: this.props.userAccDetails.gender,
      nationality: this.props.userAccDetails.nationality,
      address: this.props.userAccDetails.address,
      state: this.props.userAccDetails.state,
      accountNumber: this.props.userAccDetails.accountNumber,
      balance: this.props.userAccDetails.balance
    };
    this.logout = this.logout.bind(this);
  }
  /**
 * 
 * 
 * @memberof Dashboard
 * @returns {void}
 */
  componentDidMount() {
    this.props.getUserAccDetails();
  }
  /**
 *
 * @param {*} nextProps updated props
 * @returns {DOM} DOM object
 */
  componentWillReceiveProps(nextProps) {
    this.setState({
      firstname: nextProps.userAccDetails.firstname,
      lastname: nextProps.userAccDetails.lastname,
      username: nextProps.userAccDetails.username,
      email: nextProps.userAccDetails.email,
      gender: nextProps.userAccDetails.gender,
      nationality: nextProps.userAccDetails.nationality,
      address: nextProps.userAccDetails.address,
      state: nextProps.userAccDetails.state,
      accountNumber: nextProps.userAccDetails.accountNumber,
      balance: nextProps.userAccDetails.balance
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

  render() {
    return (
      <div className="dashboard-container">
      <header>
      <div id="slide-out" className="side-nav fixed">
        <div className="side-nav-section logo">
          <Link to="/" className="brand-logo logo">
            <img src="/img/logo_new.png" alt="ABNB" height="30" />
          </Link>
        </div>
        <nav className="nav">
         <NavLink activeClassName="active" exact to="/dashboard" className="nav-link">Account Summary </NavLink>
         <NavLink activeClassName="active" exact to="/transactions" className="nav-link">Recent Transactions</NavLink>
         <NavLink activeClassName="active" exact to="/transfer" className="nav-link">Make Transfer</NavLink>
         <NavLink activeClassName="active" exact to="/accountdetails" className="nav-link">Account Details</NavLink>
         <a onClick={this.logout} className="nav-link logout-btn">Logout</a>
       </nav>
      </div>
    </header>
        <main>
          <div className="welcome-caption">
            <span className="float-header-with-flex"></span>
            <span><h4>Welcome, {this.state.username}</h4></span>
          </div>
          <AccountInfo accountDetails={this.state} />
        </main>

      </div>
    )
  }
}
const mapStateToProps = state => ({
  userAccDetails: state.userAccDetails,
  logout: PropTypes.func.isRequired,
});

AccountDetails.propTypes = {
  getUserAccDetails: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};


export default connect(mapStateToProps, { getUserAccDetails, logout })(AccountDetails);
