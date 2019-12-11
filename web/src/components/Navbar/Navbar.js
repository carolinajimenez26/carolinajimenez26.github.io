import React from 'react';
import './Navbar.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    let wrappedElement = document.getElementsByClassName('Nav')[0];
    let classNameElement = wrappedElement.className;
    const isTop = window.scrollY < 100;
    console.log(this.state.isTop);
    if (isTop !== this.state.isTop) {
      this.setState({ isTop }, () => {
        if (this.state.isTop) { // if the user is in the top, stop showing the fixed nav
          if (!classNameElement.includes("d-none")) {
            classNameElement += " d-none";
          }
        } else { // if it is not in the top, show the fixed nav
          if (classNameElement.includes("d-none")) { // just if it is not showing it
            classNameElement = classNameElement.replace("d-none", "");
          }
        }
        wrappedElement.className = classNameElement;
      });
    }
  }

  render() {
    return (
      <div className="Nav d-none">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="content text-white collapse navbar-collapse justify-content-center" id="navbarNav">
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
export default Nav;