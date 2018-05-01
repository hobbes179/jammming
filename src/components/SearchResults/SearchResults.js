import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

// GET RESULTS BY SEARCHING SPOTIFY
const results = [
  { Name:'Tiny Dancer',
    Artist:'Elton John',
    Album:'Madam Across The Water'
  },
  { Name:'Tiny Dancer',
    Artist:'Tim McGraw',
    Album:'Love Story'
  },
  { Name:'Tiny Dancer',
    Artist:'Rockabye Baby!',
    Album:'Lullaby Renditions of Elton John'
  },
  { Name:'Tiny Dancer',
    Artist:'The White Raven',
    Album:'Tiny Dancer'
  },
  { Name:'Tiny Dancer - Live Album Version',
    Artist:'Ben Folds',
    Album:'Ben Folds Live'
  }
];

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList list={results} type='result'/>
      </div>
    )
  }
}

export default SearchResults;
