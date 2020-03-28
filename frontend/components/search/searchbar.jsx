import React, { Component, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { searchTracks, removeTrackErrors } from '../../actions/track_actions';

const SearchBar = (props) => {
    const [searchString, setSearchString] = useState("");
    
    const handleSearchInput = () => {
        return e => {
            setSearchString(e.currentTarget.value);
        }
    }

    const handleSearchSubmit = () => {
        if (searchString !== "") {
            props.searchTracks(searchString);
            props.removeTrackErrors();
            props.history.push(`/nav/search/${searchString}`);
            setSearchString("");
        }
    }

    return (
        <div className="nav-bar-search">
            <form className="search-form">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    value={searchString}
                    onChange={handleSearchInput()}
                />
                <button className="search-button" onClick={handleSearchSubmit}>Search</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
    searchTracks: (tracks) => dispatch(searchTracks(tracks)),
    removeTrackErrors: () => dispatch(removeTrackErrors())
})

// export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(SearchBar);