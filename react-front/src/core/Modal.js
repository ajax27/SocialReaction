import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import '../App.css';

class Modal extends Component {
  state = {
    modal2: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {

    return (
      <MDBContainer>
        <MDBBtn color="indigo darken-4" onClick={this.toggle(2)}>GET STARTED</MDBBtn>
        <MDBModal isOpen={this.state.modal2} className="modal-avatar" toggle={this.toggle(2)} centered>
          <MDBModalHeader toggle={this.toggle(2)} className="mx-auto">
            <img
              src="https://res.cloudinary.com/ajax27/image/upload/v1555947082/ajax27me_aqtdse.png"
              alt="avatar"
              className="rounded-circle img-responsive"
            />
            &nbsp;  Create A Post
          </MDBModalHeader>
          <MDBModalBody>
            <p>Welcome to Ajax-React, a social network for people to
            share stories with those of a like mind.</p>
            <p>To get started you just have to sign up, login and create your profile
              and share your story</p>
            <p>It's great to have you on board, have fun!</p>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="indigo darken-4" onClick={this.toggle(2)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
};

export default Modal;