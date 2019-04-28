import React, { Component } from "react";
import Posts from "../post/Posts";
import Users from "../user/Users";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";

class Admin extends Component {
  state = {
    redirectToHome: false
  };

  componentDidMount() {
    if (isAuthenticated().user.role !== "admin") {
      this.setState({ redirectToHome: true });
    }
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }

    return (
      <div style={{ background: '#DEE4E5' }}>
        <div className="jumbotron text-center" style={{ background: '#9ad8ed' }}>
          <h2>Admin Dashboard</h2>
          <p className="lead">Welcome Admin, what would you like to do today!</p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-center">To Edit Or Delete</h2>
              <hr />
              <Posts />
            </div>
            <div className="col-md-6">
              <h2 className="text-center">Click On User Or Post</h2>
              <hr />
              <Users />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;