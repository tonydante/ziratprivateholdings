import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { logout, getTransactions } from '../../actions/user';

  /**
    * @constructor
    * @description Creates Instance of LoginForm
    * @param {Object} props
    * @memberOf LoginForm
    */
class Transactions extends Component {
  /**
    * @constructor
    * @description Creates Instance of LoginForm
    * @param {Object} props
    * @memberOf LoginForm
    */
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    }
    this.logout = this.logout.bind(this);
  }

  /**
* 
* 
* @memberof Dashboard
* @returns {void}
*/
  componentDidMount() {
    this.props.getTransactions();
  }
  /**
     * @method
     * @memberOf Class CommentPage
     * @param {*} nextProps updated props
     * @return {*} sets state to currrent prop
     */
  componentWillReceiveProps(nextProps) {
    this.setState({
      transactions: nextProps.transactions
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
    * @constructor
    * @description Creates Instance of LoginForm
    * @param {Object} props
    * @memberOf LoginForm
    */
  render() {
    const transction = this.state.transactions.map(transaction => {
      return <tr key={transaction._id}>
        <td scope="row">{transaction.created_at.replace(/T.*/, '')}</td>
        <td>{transaction.transferDescription}</td>
        <td>{transaction.transactionType}</td>
        <td>$ {transaction.amountToTransfer}</td>
        <td></td>
      </tr>
    })
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
              <span><h4>Hello, {this.props.userdetail.username}</h4></span>
            </div>
            <div style={{marginLeft: 10}}>
              <div><h4>Hi {this.props.userdetail.username} below are your transactions</h4></div>
              <div className="transaction-table">
                <table className="table">
                  <thead className="bg-danger" style={{color: "#fff"}}>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Description</th>
                      <th scope="col">Transaction Type</th>
                      <th scope="col">Amount Transfered</th>
                    </tr>
                  </thead>
                  <tbody >
                    {transction}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  userdetail: state.setCurrentUser.user,
  transactions: state.transactions.user,

})
Transactions.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout, getTransactions })(Transactions);
