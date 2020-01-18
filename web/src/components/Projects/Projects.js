import React from 'react';
import './Projects.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    const projects = [
      {
        "description": "SSL Certificate Viewer",
        "img": "./images/projects/mozlogo.jpg",
        "link": "https://bugzilla.mozilla.org/show_bug.cgi?id=1553524"
      },
      {
        "description": "Web page jointDeveloper",
        "img": "./images/projects/jointDev.png",
        "link": "https://jointdevweb.firebaseapp.com/"
      },
      {
        "description": "University Project - Chord Algorithm",
        "img": "./images/projects/Chord_network.png",
        "link": "https://github.com/carolinajimenez26/BitTorrent"
      },
      {
        "description": "Tic-tac-toe Game",
        "img": "./images/projects/tictactoe_game.png",
        "link": "https://github.com/carolinajimenez26/Tic-tac-toe"
      },
      {
        "description": "Digital Prodict School - Mobile project",
        "img": "./images/projects/dps.png",
        "link": ""
      },
      {
        "description": "Project Degree - Brain Images visualizer through Tractographies",
        "img": "./images/projects/tractweb.png",
        "link": "http://repositorio.utp.edu.co/dspace/handle/11059/9433"
      },
      {
        "description": "More projects",
        "img": "./images/projects/github.png",
        "link": "https://github.com/carolinajimenez26/"
      },
    ];
    this.setState({
      projects
    });
  }

  componentWillUnmount() {
    this.setState({ projects: [] });
  }

  render() {
    const items = [];

    for (const [index, value] of this.state.projects.entries()) {
      items.push(
        <div className="project col-sm-4" key={"project" + index}>
          <img className="project-img" src={value.img} />
          <a href={value.link} target="_blank" rel="noopener noreferrer">
            <div className="project-description">
              <p className="font-weight-bold">{value.description}</p>
            </div>
          </a>
        </div>
      );
    }
    return (
      <div className="Projects" id="projects">
        <div className="row d-flex justify-content-center">
          <h1 className="title">Projects</h1>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {items}
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;