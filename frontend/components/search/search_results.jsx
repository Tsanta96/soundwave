import React, { Component } from 'react'
import TrackItemContainer from '../tracks/track_item_container';

export class SearchResults extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     update: 0
        // }
    }

    componentDidMount() {
        this.props.searchTracks(this.props.match.params.searchString)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.searchTracks(this.props.match.params.searchString);
        }
    }

    // renderErrors() {
    //     console.log(this.props.errors.length);
    //     if (this.props.errors.length > 0) {
    //         return (
    //             <div className="search-errors">
    //                 {this.props.errors[0]}
    //             </div>
    //         )
    //     }
    // }

    render() {
        return (
            <div>
                <div className="search-tracks">
                    <div className="search-text">
                        <div className="default">{this.props.tracks.length} Search Results for: <div className="search-string">"{this.props.match.params.searchString}"</div></div>
                    </div>
                    {this.props.tracks.map((track, idx) => <TrackItemContainer key={track.id} idx={idx} track={track} />)}
                </div>
                <div id="sound-wave-everywhere"><img id="sound-wave-everywhere" src="http://d313rqwfqaf3f.cloudfront.net/design/wave_white.svg" width="400" height="400"></img></div>
            </div>
        )
    }
}

export default SearchResults;
