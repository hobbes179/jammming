import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
    return (
      <div class="SearchResults">
        <h2>Results</h2>
        <TrackList type='results'/>
      </div>
    )
  }
}

export default SearchResults;
