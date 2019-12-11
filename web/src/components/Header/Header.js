import React from 'react';
import './Header.css';
import HeaderNav from '../HeaderNav/HeaderNav'

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <HeaderNav />
      </div>
    );
  }
}

export default Header;