import React from "react";
import { connect } from "react-redux";
import { login, removeErrors } from "../../actions/session_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import Login from "./login";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
  closeModal: () => dispatch(closeModal()),
  openModal: (formType) => dispatch(openModal(formType)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
