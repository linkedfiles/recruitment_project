
import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as infoActions } from "redux/modules/info";

const mapStateToProps  = (state, ownProps) => {
  const {info: { Companies } } = state;
  return {
    Companies
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCompanies: () => {
      dispatch(infoActions.getCompanies());
    }
  };
};


export default connect(mapStateToProps , mapDispatchToProps)(Container);