import React from "react";
import { Text, TextField, Box, Label } from "gestalt";
import "gestalt/dist/gestalt.css";

class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this._handleChange.bind(this);
    this.state = {
      value: ""
    };
  }
  _handleChange({ value }) {
    this.setState({ value });
  }

  render() {
    return (
      <Box>
        <Box marginBottom={2}>
          <Label htmlFor={this.props.htmlFor}>
            <Text>{this.props.title}</Text>
          </Label>
        </Box>
        <TextField
          id={this.props.signinfo}
          onChange={this.handleChange}
          placeholder={this.props.signplaceholder}
          value={this.state.value}
          type={this.props.signtype}
        />
      </Box>
    );
  }
}

export default BasicInput;
