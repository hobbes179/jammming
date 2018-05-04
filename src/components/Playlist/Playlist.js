import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  // Render the playlist container and call the relevant components
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={this.props.playlistName} onChange={this.handleNameChange} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <div className="Buttons">
          <a className="Playlist-button" onClick={this.props.onShuffle}>SHUFFLE</a>
          <a className="Playlist-button" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
        </div>
      </div>
    )
  }
}

export default Playlist;
