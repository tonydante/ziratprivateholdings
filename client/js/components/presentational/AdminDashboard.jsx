import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import shortId from 'shortid'
import { getAllUsers, logout, authTransfer, deleteUser } from '../../actions/user';
import UserList from '../containers/UserList';

  /**
  * Creates Instance of UpdateProfilePage
  * @param {Object} props
  * @memberOf UpdateProfilePage
  */
class AdminDashboard extends Component {
  /**
  * Creates Instance of UpdateProfilePage
  * @param {Object} props
  * @memberOf UpdateProfilePage
  */
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.allUsers,
      pages: 0,
      currentPage: 1,
      limit: 10,
    };
    this.onChange = this.onChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }
  /**
 * 
 * 
 * @memberof Dashboard
 * @returns {void}
 */
  componentDidMount() {
    const { currentPage, limit } = this.state;
  }

  /**
   * 
   * @desc thsi method handles deleting a user 
   * @memberof AdminDashboard
   */
  handleDelete(event, id) {
    event.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to view this user again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.deleteUser(id).then(() => {
            this.props.getAllUsers();
          });
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("User was not deleted!");
        }
      });
  }

  /**
     * @method onChange
     * @param {Event} event
     * @return {Object} updates State
     */
  onChange(event) {
    const toggleTokenValue = event.target.checked
    const id = event.target.name;
    const transferToken = {
      firstToken: toggleTokenValue,
      isActive: toggleTokenValue
    }
    this.props.authTransfer(id, transferToken).then(() => {
      if (toggleTokenValue === true) {
        return swal({
          title: "Hi there!",
          text: 'Transfer has been activated for this user',
          icon: "success"
        });
      }
      if (toggleTokenValue === false) {
        return swal({
          title: "Hi there!",
          text: 'Transfer has been deactivated for this user',
          icon: "warning"
        });
      }
    })
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
          <NavLink activeClassName="active" exact to="/admin/dashboard/clients" className="nav-link">Users </NavLink>
          <NavLink activeClassName="active" exact to="/admin/dashboard/create" className="nav-link">Create a client </NavLink>
           <a onClick={this.props.logout} className="nav-link logout-btn">Logout</a>
         </nav>
        </div>
      </header>
        <main>
          <div className="welcome-caption">
            <span className="float-header-with-flex"></span>
            <span><h4>Welcome, {this.props.admin.username} </h4></span>
          </div>
          {   /*<UserList />*/}
          <div className="account-summary-container">
            <div className="account-summary-section">
              {this.props.data.users.length > 0 ? this.props.data.users.map(user => (
                <div className="account-summary-list" key={shortId.generate()}>
                  <span>Client's Name:  
                  <Link className="username" to={`/admin/edit/client/${user._id}`}><span key={shortId.generate()}>{user.username}</span></Link>
                  </span>
                  <div className="transfer-toggle">
                  <span>Transfer Off</span>
                    <label className="switch">
                    <input id={user._id} name={user._id} type="checkbox" onChange={this.onChange} checked={user.isActive} />
                      <span className="slider"></span>
                      </label>
                      <span>Transfer On</span>
                  </div>
                  
                  <button className="w3-btn w3-circle" onClick={(event, id) => this.handleDelete(event, user._id)}>x</button>

                </div>
              )) : (<h3> No users found</h3>)}
            </div>
          </div>
        </main>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  data: state.clients,
  admin: state.setCurrentUser.user
});

AdminDashboard.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired
};


export default connect(mapStateToProps, { getAllUsers, logout, authTransfer, deleteUser })(AdminDashboard);
