import React from 'react';
import './Header.css';
import HeaderNav from '../HeaderNav/HeaderNav'

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="row">
          <HeaderNav />
        </div>
        <div className="row d-flex justify-content-center" id="text-elem">
          <h1 className="text-white">Hello, this is Carolina</h1>
          <span className="text-white">
            ---- I'm a Software Developer ----
          </span>
        </div>
      </div>
    );
  }
}

export default Header;