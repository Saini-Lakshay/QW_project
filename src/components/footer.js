import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './css_files/footer_css.css';

class FooterPage extends Component {
  render() {
    return (
      <div className='footer'>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <p><h6>
                  At Query Web , we try to commuicate you with people around the world so you can solve or ask any queries that you have in your mind.<br></br>
                  It's a platform where you can share your knowledge about different topics !! </h6>
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Quick Jumps</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="/">Home Page</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="container-fluid text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()}  Copyright: Query Web
        </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default FooterPage;