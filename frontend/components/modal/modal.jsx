import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';


const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component= <LoginContainer />;
            break;
        case 'signup':
            component = <SignupContainer />;
            break;
        default: 
            return null;
    }

    return (
        <div className="modal-background">
            <button id="close-out" onClick={closeModal}>x</button>
            <div className="modal-child"> 
                { component }
            </div>
        </div>
    );
}

//Modal Container
const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps,mapDispatchToProps)(Modal)