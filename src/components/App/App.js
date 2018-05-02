import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);

    this.state = {
      searchResults: [
      { name:'Tiny Dancer',
        artist:'Elton John',
        album:'Madam Across The Water',
        id: 1
      },
      { name:'Tiny Dancer',
        artist:'Tim McGraw',
        album:'Love Story',
        id: 2
      },
      { name:'Tiny Dancer',
        artist:'Rockabye Baby!',
        album:'Lullaby Renditions of Elton John',
        id: 3
      },
      { name:'Tiny Dancer',
        artist:'The White Raven',
        album:'Tiny Dancer',
        id: 4
      },
      { name:'Tiny Dancer - Live Album Version',
        artist:'Ben Folds',
        album:'Ben Folds Live',
        id: 5
      }],

      playlistName: 'Playlist Name',
      playlistTracks: [
      { name:'Tiny Dancer',
        artist:'Britney Spears',
        album:'Oops!... I Dit It Again',
        id: 1
      },
      { name:'So Emotional',
        artist:'Whitney Houston',
        album:'Whitney',
        id: 6
      },
      { name:'It\'s Not Right but It\'s Okay',
        artist:'Whitney Houston',
        album:'My Love Is Your Love',
        id: 7
      }]
    }
  }

  addTrack(track) {
    let shouldAdd = true;
    // Run through playlist and check for instances where the ID is the same as the track the user is adding.
    this.state.playlistTracks.map(plTrack => {
      if (track.id === plTrack.id) {
        shouldAdd = false;
        console.log('already in playlist'); //Show console whether or not the song has registered as a duplicate.
      }
    })
    if (shouldAdd) {
      let newPlaylist = this.state.playlistTracks;
      newPlaylist.push(track);
      this.setState({playlistTracks: newPlaylist })
      console.log('track added to playlist'); //Show console that track has been added.
    };
  }

  removeTrack(track) {
    //remove track code here
    let newPlaylist = this.state.playlistTracks;
    newPlaylist = newPlaylist.filter(item => track.id != item.id);
    this.setState({playlistTracks: newPlaylist });
    console.log('track removed'); //Show console that the track has been removed.
  }

  updatePlaylistName(name) {
    console.log(`old playlist name was ${this.state.playlistName}`); // Record starting name.
    this.setState({playlistName: name});
    console.log(`new playlist name is ${this.state.playlistName}`); //Check that the name has changed.
  }

  render() {
    return (
      <body>
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults
                searchResults={this.state.searchResults}
                onAdd={this.addTrack}
              />
              <Playlist
                playlistTracks={this.state.playlistTracks}
                playlistName={this.state.playlistName}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
              />
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
