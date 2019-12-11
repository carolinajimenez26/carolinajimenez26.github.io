import React from 'react';
import './HeaderNav.css';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    };
  }

  render() {
    return (
      <div className="Nav">
        <nav className="navbar navbar-expand-lg justify-content-center">
          <div className="content text-white" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link font-weight-bold text-white font-subtitle" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white font-subtitle" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white font-subtitle" href="#blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white font-subtitle" href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default HeaderNav;