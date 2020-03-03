import React, { Component } from 'react'
import TrackItemContainer2 from '../tracks/track_item_container2';

export class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.searchTracks(this.props.match.params.searchString)
    }

    renderErrors() {
        console.log(this.props.errors.length);
        if (this.props.errors.length > 0) {
            return (
                <li>
                    {this.props.errors[0]}
                </li>
            )
        }
    }

    render() {
        return (
            <div>
                <div>
                    You Searched for "{this.props.match.params.searchString}"
                    {this.renderErrors()}
                    {this.props.tracks.map((track, idx) => <TrackItemContainer2 key={track.id} idx={idx} track={track} />)}
                </div>
            </div>
        )
    }
}

export default SearchResults;
