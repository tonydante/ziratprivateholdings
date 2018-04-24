import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import swal  from 'sweetalert';
import { connect } from 'react-redux';
import history from '../../utils/history';
import { logout } from '../../actions/user';

class ProgressBar extends Component {
  /**
   * 
   * 
   * @memberof Dashboard
   * @returns {void}
   */
  componentDidMount() {
    $(document).ready(function () {
      $('.skill_three').animate({ width: '100%' }, 4000, function() {
        swal("Write something here:", {
          text: 'Please enter Tax Code',
          content: "input",
        })
          .then((value) => {
            if (value) {
              swal('An error occured!. Please contact your account manager if this error persists').then(()=>{
                history.push('/dashboard');
              })

            }
          })
      });
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
          </div>
          <div className="account-summary-container">
            <div className="account-summary-section">
              <p className="progress-text">Transfer in progress</p>
    
            <div className="progression-bar">
            <span>0%</span>
                <div className="skill_bar">
                  <div className="skill_bar_progress skill_three"></div>
                </div>
            <span>100%</span>
              </div>
            </div>
          </div>
        </main>
        </div>

      </div>
    )
  }
}


ProgressBar.propTypes = {
  logout: PropTypes.func.isRequired
};


export default connect(null, { logout })(ProgressBar);
