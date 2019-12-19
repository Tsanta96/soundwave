import { connect } from 'react-redux'
import { createNewUser, login, removeErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import Signup from './signup';


const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    createNewUser: (formUser) => dispatch(createNewUser(formUser)),
    login: (formUser) => dispatch(login(formUser)),
    closeModal: () => dispatch(closeModal()),
    openModal: (formType) => dispatch(openModal(formType)),
    removeErrors: () => dispatch(removeErrors())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Signup);