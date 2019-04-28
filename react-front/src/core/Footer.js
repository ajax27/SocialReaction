import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Shaun Collins Ajax-React Social Network</h5>
            <p>
              I have been designing and developng websites for the last three years.
              <br />If you would like to employ my services message me!
            </p>
            <p>shauncollins@ajax27.com</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">My Social Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/shaun.collins.5623">Facebook &nbsp;<i class="fab fa-facebook-square"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="https://twitter.com/ajax27Co">Twitter &nbsp;<i class="fab fa-twitter-square"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/ajax27">Github &nbsp;<i class="fab fa-github-square"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/shaun-collins-ajax27/">LinkedIn &nbsp;<i class="fab fa-linkedin"></i></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.ajax27.com"> Ajax27.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;