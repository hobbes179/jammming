import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  render() {
    return (
      <body>
        <div>
          <h1>Ja<span class="highlight">mmm</span>ing</h1>
          <div class="App">
            <SearchBar />
            <div class="App-playlist">
              <SearchResults />
              <Playlist />
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
