import React, { Component } from 'react'
import TrackItemContainer from '../tracks/track_item_container';

export class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.searchTracks(this.props.match.params.searchString)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.searchTracks(this.props.match.params.searchString);
        }
    }

    render() {
        return (
          <div>
            <div className="search-tracks">
              <div className="search-text">
                <div className="default">
                  {this.props.tracks.length} Search Results for:{" "}
                  <div className="search-string">
                    "{this.props.match.params.searchString}"
                  </div>
                </div>
              </div>
              {this.props.tracks.map((track, idx) => (
                <TrackItemContainer key={track.id} idx={idx} track={track} />
              ))}
            </div>
            <div id="sound-wave-everywhere">
              <img
                id="sound-wave-everywhere"
                src="http://dsmug1izjrtvi.cloudfront.net/design/wave_white.svg"
                width="400"
                height="400"
              ></img>
            </div>
          </div>
        );
    }
}

export default SearchResults;
