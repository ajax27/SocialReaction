import React, { Component } from "react";
import Posts from "../post/Posts";
import Modal from './Modal';
import TermsModal from './TermsModal';
import FooterPage from './Footer';
import '../App.css';
import BackgroundImage from '../images/hills.jpg';

class Home extends Component {

  render() {
    return (
      <div style={{ background: '#DEE4E5' }}>
        <div className="jumbotron text-center">
          <h1 style={{ color: '#033e9e', fontWeight: '600' }} >Welcome to Ajax-React</h1>
          <hr />
          <p className="lead text-black">A Social Network built on React</p>
          <Modal className="modalBtn" />
          <img
            src={BackgroundImage}
            style={{ width: 'auto' }}
            alt='hills'
            className="img-fluid"
          />
        </div>
        <div className="container">
          <Posts />
        </div>
        <TermsModal />
        <hr />
        <FooterPage />
      </div>
    );
  }
};

export default Home;