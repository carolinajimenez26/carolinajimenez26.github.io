import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <footer className="Footer" id="contact">
        <div>
          <div className="container" id="icon-container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-6 col-lg-7 text-center text-md-right text-white">
                <a className="icon" href="https://twitter.com/carojimenez26_" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter white-text mr-4"> </i>
                </a>
                <a className="icon" href="https://linkedin.com/in/carolinajimenez26/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin white-text mr-4"> </i>
                </a>
                <a className="icon" href="https://medium.com/@carolinajimenez26" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-medium white-text mr-4"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5 text-white">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
              <p><i className="fa fa-home mr-3"></i> Germany</p>
              <p><i className="fa fa-envelope mr-3"></i>carolina.jimenez.g@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3 text-white">
          <p>Copyright ©2020 All rights reserved</p>
          <p>Inspired by <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer">Colorlib</a> design</p>
        </div>
      </footer>
    );
  }
}
export default Footer;