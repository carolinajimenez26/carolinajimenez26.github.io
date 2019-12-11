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
    const items = [];

    for (const [index, value] of this.props.navElems.entries()) {
      items.push(
        <li className="nav-item active" key={index}>
          <a className="nav-link font-weight-bold text-white" href={value.href}>{value.name}</a>
        </li>
      );
    }

    return (
      <div className="Nav">
        <nav className="navbar navbar-expand-lg justify-content-center">
          <div className="content text-white d-none d-lg-block" id="navbarNav">
            <ul className="navbar-nav">
              {items}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default HeaderNav;