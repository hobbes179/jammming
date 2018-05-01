import React from 'react';
import './TrackList.css';
import Track from '../Track/Track'

class TrackList extends React.Component {
  render() {

    if (this.props.type === 'results') {
      return (
        <div class="TrackList">
          <div class="Track">
            <div class="Track-information">
              <h3>Tiny Dancer</h3>
              <p>Elton John | Madman Across The Water</p>
            </div>
            <a class="Track-action">+</a>
          </div>
          <div class="Track">
            <div class="Track-information">
              <h3>Tiny Dancer</h3>
              <p>Tim McGraw | Love Story</p>
            </div>
            <a class="Track-action">+</a>
          </div>
          <div class="Track">
            <div class="Track-information">
              <h3>Tiny Dancer</h3>
              <p>Rockabye Baby! | Lullaby Renditions of Elton John</p>
            </div>
            <a class="Track-action">+</a>
          </div>
          <div class="Track">
            <div class="Track-information">
              <h3>Tiny Dancer</h3>
              <p>The White Raven | Tiny Dancer</p>
            </div>
            <a class="Track-action">+</a>
          </div>
          <div class="Track">
            <div class="Track-information">
              <h3>Tiny Dancer - Live Album Version</h3>
              <p>Ben Folds | Ben Folds Live</p>
            </div>
            <a class="Track-action">+</a>
          </div>
        </div>
      )
    } else {
      return (
        <div class="TrackList">
          <div class="Track">
            <div class="Track-information">
              <h3>Stronger</h3>
              <p>Britney Spears | Oops!... I Did It Again</p>
            </div>
            <a class="Track-action">-</a>
          </div>
          <div class="Track">
            <div class="Track-information">
              <h3>So Emotional</h3>
              <p>Whitney Houston | Whitney</p>
            </div>
            <a class="Track-action">-</a>
          </div>
          <div class="Track">
            <div class="Track-information">
              <h3>It's Not Right But It's Okay</h3>
              <p>Whitney Houston | My Love Is Your Love</p>
            </div>
            <a class="Track-action">-</a>
          </div>
        </div>
      )
    }
  }
}

export default TrackList;
