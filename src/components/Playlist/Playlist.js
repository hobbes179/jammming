import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

// BUILD OBJECT ARRAY AND PREPARE FOR POST TO SPOTIFY
const playlist = [
  { Name:'Stronger',
    Artist:'Britney Spears',
    Album:'Oops!... I Dit It Again'
  },
  { Name:'So Emotional',
    Artist:'Whitney Houston',
    Album:'Whitney'
  },
  { Name:'It\'s Not Right but It\'s Okay',
    Artist:'Whitney Houston',
    Album:'My Love Is Your Love'
  }
];

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value='New Playlist' />
        <TrackList list={playlist} type=''/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
