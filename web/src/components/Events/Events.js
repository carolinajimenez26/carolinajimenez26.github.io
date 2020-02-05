import React from 'react';
import './Events.css';
import HorizontalTimeline from '../HorizontalTimeline/HorizontalTimeline';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const items1 = [
      {
        "title": "Ninth Colombian Computer Congress (9CCC)",
        "date": "April 3th, 2014",
        "description": "",
        "colorClass": "primary"
      },
      {
        "title": "Grace Hopper Celebration",
        "date": "October 4th to 6th, 2017",
        "description": "Grace Hopper Celebration is the world's largest gathering of women technologists. Assisted to the conference with a full Scholarship, obtained by applying with mygrades and an essay.",
        "colorClass": "warning"
      },
      {
        "title": "Scale Conf Colombia",
        "date": "March 24th to 25th, 2017",
        "description": "ScaleConf Colombia is a 2-day pioneering language-agnostic tech conference in the region about scalability, distributed systems, security, artificial intelligence, architecture and modern software tools and practices. Assisted to the conference with a diversity Scholarship.",
        "colorClass": "info"
      },
    ];

    const items2 = [
      {
        "title": "Grace Hopper Celebration",
        "date": "October 1th to 4th, 2019",
        "description": "Grace Hopper Celebration is the world's largest gathering of women technologists. Assisted to the conference with a complimentary Scholarship.",
        "colorClass": "success"
      },
      {
        "title": "Mozilla All-Hands",
        "date": "January 27th to 31th, 2020",
        "description": "Invited as a volunteer contributor. \"All Hands are a unique and special opportunity for all paid staff and our most impactful volunteers to come together, in person, to share experiences and interact with people they may not normally work with (or just see over Zoom).\"",
        "colorClass": "danger"
      },
    ];

    return (
      <div className="Events" id="events">
        <div className="row d-flex justify-content-center">
          <h1 className="title">Events</h1>
        </div>
        <HorizontalTimeline items={items1}/>
        <HorizontalTimeline items={items2}/>
      </div>
    );
  }
}
export default Events;