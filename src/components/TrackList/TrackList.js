import React from 'react';
import './TrackList.css';
import Track from '../Track/Track'


// Take track list and hand off individual tracks into <Track /> components.
// Use props to determine what the onClick action will be for the tracks.
class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(result => {
            return <Track
                    track={result}
                    key={result.id}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={this.props.isRemoval}
                  />
          })
        }
      </div>
    )
  }
}

export default TrackList;
