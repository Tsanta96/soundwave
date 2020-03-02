import {connect} from 'react-redux';
import SearchResults from './search_results';
import { searchTracks } from '../../actions/track_actions';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    searchTracks: (tracks) => dispatch(searchTracks(tracks))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);