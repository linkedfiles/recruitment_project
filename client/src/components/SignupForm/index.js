import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        createAccount: (email, password, name) => {
            dispatch(userActions.createAccount(email, password, name));
        }
    };
};

export default connect(null, mapDispatchToProps)(Container);