import React from 'react';
import './Header.css';
import HeaderNav from '../HeaderNav/HeaderNav'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socialElems: []
    };
  }

  componentDidMount() {
    let socialElems = [
      {
        "name": "twitter",
        "className": "fa fa-twitter",
        "href": "https://twitter.com/carojimenez26_"
      },
      {
        "name": "medium",
        "className": "fa fa-medium",
        "href": "https://medium.com/@carolinajimenez26"
      },
    ];
    this.setState({ socialElems });
  }

  render() {
    let socialItems = [];

    for (const [index, value] of this.state.socialElems.entries()) {
      socialItems.push(
        <li key={index}>
          <a className="text-white" href={value.href} target="_blank">
            <i className={value.className}></i>
          </a>
        </li>
      );
    }

    return (
      <div className="Header">
        <div className="row">
          <HeaderNav navElems={this.props.navElems} />
        </div>
        <div className="row d-flex justify-content-center" id="text-elem">
          <h1 className="text-white">Hello, this is Carolina</h1>
          <span className="text-white">
            ---- I'm a Software Developer ----
          </span>
        </div>
        <div className="d-none d-lg-block" id="social-links">
          <ul>
            {socialItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;