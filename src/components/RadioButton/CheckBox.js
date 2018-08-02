import React from "react";
import { Box, Label, Checkbox, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
    this.handleChecked = this._handleChecked.bind(this);
  }
  _handleChecked({ checked }) {
    this.setState({ checked });
  }
  render() {
    return (
      <Box alignItems="center" direction="row" display="flex">
        <Checkbox
          checked={this.state.checked}
          id={this.props.chkbxid}
          name={this.props.chkbxname}
          onChange={this.handleChecked}
        />
        <Label htmlFor={this.props.chkbxhtmlFor}>
          <Box paddingX={2}>
            <Text>{this.props.chkbxcontents}</Text>
          </Box>
        </Label>
      </Box>
    );
  }
}

export default CheckBox;
