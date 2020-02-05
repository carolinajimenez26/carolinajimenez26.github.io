import React from 'react';
import './CV.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';
import { IoIosSchool } from 'react-icons/io';

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const items = [
      {
        "title": "Software Engineer Intern at Mozilla",
        "location": "Remote",
        "description": "Selected for the position through Outreachy, based on contributions to Firefox codebase. Worked on creating a new SSL Certificate Viewer for Firefox",
        "date": "May 2019 - Aug 2019",
        "contentStyle": { background: '#6588ab', color: '#fff' },
        "contentArrowStyle": { borderRight: '7px solid  #6588ab' },
        "iconStyle": { background: '#4a38d2', color: '#fff' },
        "icon": <MdWork />
      },
      {
        "title": "Software Engineer Intern",
        "location": "Munich, Germany",
        "description": "Developed a mobile application using React Native and Firebase which allows truck drivers to share information in real time such as points of interest and text messaging, with the goal of creating a community between them.",
        "date": "Sep 2018 - Nov 2018",
        "contentStyle": { background: '#c482bd', color: '#fff' },
        "contentArrowStyle": { borderRight: '7px solid  #c482bd' },
        "iconStyle": { background: '#6e40dd', color: '#fff' },
        "icon": <MdWork />
      },
      {
        "title": "Under graduate Researcher",
        "location": "Pereira, Colombia",
        "description": "Researched about tractographies and developed a web application using Django and Bootstrap that automates the processes for tractography generation using MRtrix tools.",
        "date": "Aug 2017 - Jun 2018",
        "contentStyle": { background: '#86ad7c', color: '#fff' },
        "contentArrowStyle": { borderRight: '7px solid  #86ad7c' },
        "iconStyle": { background: '#864de3', color: '#fff' },
        "icon": <MdWork />
      },
      {
        "title": "Research Assistant",
        "location": "Pereira, Colombia",
        "description": "Researched about Digital Image Processing using Python with FSL and created a web application using Node.js, HTML/CSS, Materialize and JavaScript to see the result of the brain densitometries calculations. ",
        "date": "Feb 2016 - June 2017",
        "contentStyle": { background: '#c47373', color: '#fff' },
        "contentArrowStyle": { borderRight: '7px solid  #c47373' },
        "iconStyle": { background: '#b356eb', color: '#fff' },
        "icon": <MdWork />
      },
      {
        "title": "BSc Computer Systems Engineer",
        "location": "Pereira, Colombia",
        "description": "• Data structures and Algorithms • Computer programming paradigms. • Parallel programming • Mathematics • Physics • Statistics • Linear Algebra • Computer architecture • Electronics • Compilers • Databases",
        "date": "Jan 2013 - Jul 2018",
        "contentStyle": { background: 'rgb(33, 150, 243)', color: '#fff' },
        "contentArrowStyle": { borderRight: '7px solid  rgb(33, 150, 243)' },
        "iconStyle": { background: '#d593fd', color: '#fff' },
        "icon": <IoIosSchool />
      },
    ];
    this.setState({
      items
    });
  }

  componentWillUnmount() {
    this.setState({ items: [] });
  }

  render() {

    const items = [];

    for (const [index, value] of this.state.items.entries()) {
      items.push(
        <VerticalTimelineElement key={"item" + index}
          className="vertical-timeline-element--work"
          contentStyle={value.contentStyle}
          contentArrowStyle={value.contentArrowStyle}
          date={value.date}
          iconStyle={value.iconStyle}
          icon={value.icon}
        >
          <h3 className="vertical-timeline-element-title">{value.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{value.location}</h4>
          <p>{value.description}</p>
        </VerticalTimelineElement>
      );
    }

    return (
      <div className="CV" id="cv">
        <div className="row d-flex justify-content-center">
          <h1 className="title">Work Experience & Education</h1>
        </div>
        <VerticalTimeline>
          {items}
        </VerticalTimeline>
      </div>
    );
  }
}
export default CV;