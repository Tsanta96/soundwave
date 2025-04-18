import { connect } from "react-redux";

import { logout, removeErrors } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import Home from "./home";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
