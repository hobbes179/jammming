import React from 'react';
import './TrackList.css';
import Track from '../Track/Track'


// TAKE TRACK LIST AND HAND OFF INDIVIDUAL TRACK DATA
// AS WELL AS LIST TYPE FOR TRACK_ACTION FUNCTIONALITY
class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {
          this.props.list.map(result => {
            return <Track track={result} type={this.props.type}/>
          })
        }
      </div>
    )
  }
}

export default TrackList;
