import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';


class App extends Component {
  constructor(props) {
    super(props);

    // Bindings go here
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.shufflePlaylist = this.shufflePlaylist.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

    // Establish default state
    this.state = {
      searchResults: [
      // { name:'Tiny Dancer',
      //   artist:'Elton John',
      //   album:'Madam Across The Water',
      //   id: 1
      // },
      // { name:'Tiny Dancer',
      //   artist:'Tim McGraw',
      //   album:'Love Story',
      //   id: 2
      // },
      // { name:'Tiny Dancer',
      //   artist:'Rockabye Baby!',
      //   album:'Lullaby Renditions of Elton John',
      //   id: 3
      // },
      // { name:'Tiny Dancer',
      //   artist:'The White Raven',
      //   album:'Tiny Dancer',
      //   id: 4
      // },
      // { name:'Tiny Dancer - Live Album Version',
      //   artist:'Ben Folds',
      //   album:'Ben Folds Live',
      //   id: 5
      // }
      ],

      playlistName: 'New Playlist',
      playlistTracks: [
      // { name:'Tiny Dancer',
      //   artist:'Britney Spears',
      //   album:'Oops!... I Dit It Again',
      //   id: 1
      // },
      // { name:'So Emotional',
      //   artist:'Whitney Houston',
      //   album:'Whitney',
      //   id: 6
      // },
      // { name:'It\'s Not Right but It\'s Okay',
      //   artist:'Whitney Houston',
      //   album:'My Love Is Your Love',
      //   id: 7
      // }
      ]
    }
  }

  // Methods go here
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
      console.log('track added to ' + this.state.playlistName); //Show console that track has been added.
    };
  }

  removeTrack(track) {
    //remove track code here
    let newPlaylist = this.state.playlistTracks;
    newPlaylist = newPlaylist.filter(item => track.id !== item.id);
    this.setState({playlistTracks: newPlaylist });
    console.log('track removed from ' + this.state.playlistName); //Show console that the track has been removed.
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
    //console.log('playlist name changed to ' + this.state.playlistName);
  }

  // Add shuffle button for fun and practice Fisher-Yates shuffle technique
  shufflePlaylist() {
    function shuffle(array) {
      let m = array.length, t, i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    }

    let newPlaylist = shuffle(this.state.playlistTracks);
    this.setState({playlistTracks: newPlaylist });
  }

  savePlaylist() {
    let trackURIs = [];
    this.state.playlistTracks.map(track => {
      trackURIs.push(track.uri);
    })
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
  }

  search(term) {
    console.log(`You want to search for ${term}`); // Log the user's search term
    Spotify.search(term
    ).then(newSearch => {
      this.setState({searchResults: newSearch})
    });
  }

  // Render main body and bring in top level components
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar
            onSearch={this.search}
          />
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
              onShuffle={this.shufflePlaylist}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
