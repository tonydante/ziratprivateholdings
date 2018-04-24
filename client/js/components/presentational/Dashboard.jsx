import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getUserAccDetails, logout } from '../../actions/user';
import AccountSummary from '../containers/AccountSummary';

class Dashboard extends Component {
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
      accountNumber: this.props.userAccDetails.accountNumber,
      balance: this.props.userAccDetails.balance,
      availableCredit: this.props.userAccDetails.availableCredit,
      currentCreditLimitedAmount: this.props.userAccDetails.currentCreditLimitedAmount,
      lastPaymentDate: this.props.userAccDetails.lastPaymentDate,
      lastPaymentAmt: this.props.userAccDetails.lastPaymentAmt,
      totalMinAmtDue: this.props.userAccDetails.totalMinAmtDue,
      paymentDueDate: this.props.userAccDetails.paymentDueDate,
      rewardBal: this.props.userAccDetails.rewardBal,
      pendingBal: this.props.userAccDetails.pendingBal,
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
      accountNumber: nextProps.userAccDetails.accountNumber,
      balance: nextProps.userAccDetails.balance,
      availableCredit: nextProps.userAccDetails.availableCredit,
      currentCreditLimitedAmount: nextProps.userAccDetails.currentCreditLimitedAmount,
      lastPaymentDate: nextProps.userAccDetails.lastPaymentDate,
      lastPaymentAmt: nextProps.userAccDetails.lastPaymentAmt,
      totalMinAmtDue: nextProps.userAccDetails.totalMinAmtDue,
      paymentDueDate: nextProps.userAccDetails.paymentDueDate,
      rewardBal: nextProps.userAccDetails.rewardBal,
      pendingBal: nextProps.userAccDetails.pendingBal,
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
       <div className="main-wrapper">
       <header>
       <div id="slide-out" className="side-nav fixed">
         <div className="side-nav-section logo">
           <Link to="/" className="brand-logo logo">
             <img src="/img/logo_new.png" alt="ABNB" height="30" />
           </Link>
         </div>
         <nav className="nav">
          <NavLink exact to="/dashboard" className="nav-link">Account Summary </NavLink>
          <NavLink exact to="/transactions" className="nav-link">Recent Transactions</NavLink>
          <NavLink exact to="/transfer" className="nav-link">Make Transfer</NavLink>
          <NavLink exact to="/accountdetails" className="nav-link">Account Details</NavLink>
          <a onClick={this.logout} className="nav-link logout-btn">Logout</a>
        </nav>
       </div>
     </header>
     <main>
       <div className="welcome-caption">
        
         <span className="float-header-with-flex"></span>
         <span><h4>Welcome, {this.state.username}</h4></span>
       </div>
       <AccountSummary accountDetails={this.state} />
     </main>
       </div>

      </div>
    )
  }
}
const mapStateToProps = state => ({
  userAccDetails: state.userAccDetails,
  logout: PropTypes.func.isRequired,
});

Dashboard.propTypes = {
  getUserAccDetails: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};


export default connect(mapStateToProps, { getUserAccDetails, logout })(Dashboard);
