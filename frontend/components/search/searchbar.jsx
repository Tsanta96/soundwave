import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ""
        }

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchInput() {
        return e => {
            this.setState({ searchString: e.currentTarget.value })
        }
    }

    handleSearchSubmit() {
        this.props.history.push(`/nav/search/${this.state.searchString}`)
    }

    render() {
        return (
            <div className="nav-bar-search">
                <form>
                    <input 
                        className="search-input" 
                        type="text" 
                        placeholder="Search"
                        value={this.state.searchString}
                        onChange={this.handleSearchInput()}
                    />
                    <button onClick={this.handleSearchSubmit}>Search</button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(searchbar)
