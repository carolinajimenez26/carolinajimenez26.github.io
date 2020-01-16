import React from 'react';
import './About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="About" id="#about">
        <div className="about-large-title d-none d-lg-block">About</div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-md-6">
              <div className="row" id="info">
                <div className="row">
                  <h3>About me</h3>
                </div>
                <div className="row">
                  <span className="text-justify">
                    <p>Hi, my name is Carolina Jimenez, and I'm from Colombia.</p>
                    <p>
                      I'm Software Engineer with experience writing, debugging and testing code.
                      Fast learner, hard working, willing to level up my career improving my skills and learning new things.
                      I like encouraging people and teaching them what I know.
                    </p>
                    <p>
                      I want to be part of a good company that wants to help people, because that's what makes me happy.
                    </p>
                  </span>
                </div>
                <div className="row" id="#cv">
                  <button type="button" class="btn btn-lg btn-primary">
                    <a href="https://es.overleaf.com/read/cbcdhdmjkmys" target="_blank">Download CV</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div id="photo">
                <img src={this.props.photo} alt="me"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;