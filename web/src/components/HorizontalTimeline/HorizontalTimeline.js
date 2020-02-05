import React from 'react';
import './HorizontalTimeline.css';

class HorizontalTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.setState({ items: this.props.items });
  }

  componentWillUnmount() {
    this.setState({ items: [] });
  }

  render() {
    const items = [];

    for (const [index, value] of this.state.items.entries()) {
      items.push(
        <li className="timeline-item" key={"event" + index}>
          <div className={"timeline-badge " + value.colorClass}></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">{value.title}</h4>
              <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{value.date}</small></p>
            </div>
            <div className="timeline-body">
              <p>{value.description}</p>
            </div>
          </div>
        </li>
      );
    }

    return (
      <div className="HorizontalTimeline" id="horizontalTimeline">
        {/* Timeline taken from https://bootsnipp.com/snippets/a3BjR */ }
        <div className="row">
          <div className="col-md-12">
            <div className="timeline timeline-container">
            <ul className="timeline timeline-horizontal">
              {items}
            </ul>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HorizontalTimeline;