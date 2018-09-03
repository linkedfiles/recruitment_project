import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isNullOrUndefined } from "util";
import {requestApiData } from "../actions"

class Sample extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  person = (x, i) =>
    <div key={x.id.value}>
      <h1>
        {x.gender}
      </h1>
      <h1>
        {x.name.first}
      </h1>
      <h1>
        {x.name.last}
      </h1>
      <img src={x.picture.medium} />
    </div>;

  render() {
    const result = this.props.data
    console.log(isNullOrUndefined(this.props.data.data))
    return(
      <h1>
      </h1>
    )
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sample);