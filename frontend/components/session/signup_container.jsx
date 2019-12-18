import { connect } from 'react-redux'
import { createNewUser, login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import Signup from './signup';


const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    createNewUser: (formUser) => dispatch(createNewUser(formUser)),
    login: (formUser) => dispatch(login(formUser)),
    closeModal: () => dispatch(closeModal())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Signup);