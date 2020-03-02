import React, { Component } from 'react'

export class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.searchTracks(this.props.match.params.searchString)
    }

    render() {
        return (
            <div>
                <div>
                    Search Results!
                </div>
                <div>
                    {this.props.match.params.searchString}
                </div>
            </div>
        )
    }
}

export default SearchResults;
