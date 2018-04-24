import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateClientInfo, logout } from '../../actions/user';


/**
    * @description Creates Instance of LoginForm
    */
export class EditClient extends Component {
  /**
    * @constructor
    * @description Creates Instance of LoginForm
    * @param {Object} props
    * @memberOf LoginForm
    */
  constructor(props) {
    super(props);
    this.state = {
      ...props.user
    };
    this.baseState = this.state;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  /**
*
* @param {*} nextProps updated props
* @returns {DOM} DOM object
*/
  componentWillReceiveProps(nextProps) {
    this.setState({
      balance: nextProps.user.balance,
      pendingBal: nextProps.user.pendingBal,
      availableCredit: nextProps.user.availableCredit,
      currentCreditLimitedAmount: nextProps.user.currentCreditLimitedAmount,
      lastPaymentDate: nextProps.user.lastPaymentDate,
      lastPaymentAmt: nextProps.user.lastPaymentAmt,
      totalMinAmtDue: nextProps.user.totalMinAmtDue,
      paymentDueDate: nextProps.user.paymentDueDate,
      rewardBal: nextProps.user.rewardBal,
    });
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
    this.props.updateClientInfo(this.props.user._id, this.state);
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
      ...this.props.user
    });
  }

  /**
   * @method render
   *
   * @return {Object} Component
   */
  render() {
    console.log(this.props.user);
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
            <a href="/admin/dashboard/clients" className="nav-link logout-btn">
Users
{' '}
</a>
            <a onClick={this.props.logout} className="nav-link logout-btn">
Logout
</a>
          </nav>
        </div>
        </header>
          <main>
          <div className="welcome-caption">
            <span className="float-header-with-flex" />
            <span>
<h4>Welcome, {this.props.admin.username}</h4>
</span>
          </div>
          <div className="account-summary-container">
            <div className="account-summary-section">
              <div>
<p>Current User: <span className="current-user">{this.props.user.firstname} || {this.props.user.userId}</span></p>
</div>
              <div>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label htmlFor="userId">
Current Balance:
{' '}
</label>
                      <input
                        type="number"
                        name="balance"
                        pattern="[0-9]*"
                        value={this.state.balance || ''}
                        className="form-control"
                        required
                        onChange={this.onChange}
                      />
                    </div>
                  <div className="form-group ">
                      <label htmlFor="pendingBal">
Pending Balance:
{' '}
</label>
                      <input
                        type="number"
                        pattern="[0-9]*"
                        name="pendingBal"
                        value={this.state.pendingBal || ''}
                        className="form-control"
                        required
                        onChange={this.onChange}
                      />
                    </div>
                  <div className="form-group ">
                      <label htmlFor="availableCredit">
Available Credit:
{' '}
</label>
                      <input
                        type="number"
                        pattern="[0-9]*"
                        name="availableCredit"
                        value={this.state.availableCredit || ''}
                        className="form-control"
                        required
                        onChange={this.onChange}
                      />
                    </div>
                  <div className="form-group ">
                      <label htmlFor="currentCreditLimitedAmount">
Current Credit Limited Amount:
{' '}
</label>
                      <input
                        type="number"
                        pattern="[0-9]*"
                        name="currentCreditLimitedAmount"
                        value={this.state.currentCreditLimitedAmount || ''}
                        className="form-control"
                        required
                        onChange={this.onChange}
                        autoComplete="off"
                      />
                    </div>
                  <div className="form-group">
                      <label htmlFor="lastPaymentDate">
Last Payment Date:
{' '}
</label>
                      <input
                        type="text"
                        pattern="\d{1,2}/\d{1,2}/\d{2,4}"
                        title="e.g. dd/mm/yyyy"
                        name="lastPaymentDate"
                        value={this.state.lastPaymentDate || ''}
                        className="form-control"
                        required
                        onChange={this.onChange}
                        autoComplete="off"
                      />
                    </div>
                  <div className="form-group">
                      <label htmlFor="totalMinAmtDue">
Total Minimum Due:
{' '}
</label>
                      <input
                        type="number"
                        pattern="[0-9]*"
                        name="totalMinAmtDue"
                        value={this.state.totalMinAmtDue || ''}
                        className="form-control"
                        required
                        onChange={this.onChange}
                        autoComplete="off"
                      />
                    </div>
                  <div className="form-group">
                      <label htmlFor="paymentDueDate">
Payment Due Date:
{' '}
</label>
                      <input
                        type="text"
                        pattern="\d{1,2}/\d{1,2}/\d{2,4}"
                        title="e.g. dd/mm/yyyy"
                        name="paymentDueDate"
                        value={this.state.paymentDueDate || ''}
                        className="form-control"
                        required
                        onChange={this.onChange}
                        autoComplete="off"
                      />
                    </div>
                  <div className="form-group">
                      <label htmlFor="rewardBal">
Reward Balance:
{' '}
</label>
                      <input
                        type="number"
                        pattern="[0-9]*"
                        name="rewardBal"
                        value={this.state.rewardBal || ''}
                        className="form-control"
                        required
                        onChange={this.onChange}
                        autoComplete="off"
                      />
                    </div>
                  <div className="update-form-cta">
                      <button type="reset" onClick={this.resetForm} className="btn shadow-effect">
Reset
</button>
                      <button type="submit" className="btn shadow-effect update-btn">
Update
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


const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.clients.users.find(user => user._id === userId) || {};
  const admin = state.setCurrentUser.user;
  return { user, admin };
};

export default connect(mapStateToProps, { updateClientInfo, logout })(EditClient);
