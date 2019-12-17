import React, { Component } from 'react';
// add any needed imports here

import { connect } from 'react-redux'; 

class Users extends Component {

  renderUsernames = () => {
    return this.props.users.map(user => {
      return (
        <li>{user.username}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.renderUsernames()}
        </ul>
        <p>Total Users: {this.props.userCount} </p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

// connect this component to Redux
export default connect (mapStateToProps)(Users); 
