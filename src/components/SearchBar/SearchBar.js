import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);

    this.state = {
      term: null
    }
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({term:event.target.value});
  }

  // Render the search bar and button and read user search term
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song Title" onChange={this.handleTermChange}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
