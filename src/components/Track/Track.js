import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.isRemoval === false) {
      this.props.onAdd(this.props.track);
    } else {
      this.props.onRemove(this.props.track);
    }
  }

  // List the track information and choose the relevant track action button (+/-)
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a
          className="Track-action"
          onClick={this.handleClick}>{(this.props.isRemoval===false) ? '+' : '-'}
        </a>
      </div>
    )
  }
}

export default Track;
