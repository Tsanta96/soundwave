import React, { Component, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { searchTracks, removeTrackErrors } from '../../actions/track_actions';

const SearchBar = (props) => {
    const [searchString, setSearchString] = useState('');
    
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

// export class SearchBar extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             searchString: ""
//         }

//         this.handleSearchInput = this.handleSearchInput.bind(this);
//         this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
//     }

//     // componentDidUpdate(prevProps) {
//     // }

//     handleSearchInput() {
//         return e => {
//             this.setState({ searchString: e.currentTarget.value })
//         }
//     }

//     handleSearchSubmit() {
//         if (this.state.searchString !== "") {
//             this.props.searchTracks(this.state.searchString);
//             this.props.removeTrackErrors();
//             this.props.history.push(`/nav/search/${this.state.searchString}`);
//             this.setState({ searchString: ""});
//         }
//     }

//     render() {
//         return (
//             <div className="nav-bar-search">
//                 <form className="search-form">
//                     <input 
//                         className="search-input" 
//                         type="text" 
//                         placeholder="Search"
//                         value={this.state.searchString}
//                         onChange={this.handleSearchInput()}
//                     />
//                     <button className="search-button" onClick={this.handleSearchSubmit}>Search</button>
//                 </form>
//             </div>
//         )
//     }
// }
