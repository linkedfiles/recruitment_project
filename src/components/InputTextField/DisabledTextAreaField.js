import React from "react";
import { Text, TextField, Box, Label, TextArea } from "gestalt";
import "gestalt/dist/gestalt.css";

class DisabledTextAreaField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this._handleChange.bind(this);
    this.state = {
      value: ""
    };
  }
  _handleChange({ value }) {
    this.setState({
      value
    });
  }
  render() {
    return (
      <Box>
        <Box marginBottom={2}>
          <Label htmlFor="aboutme">
            <Text>With a placeholder</Text>
          </Label>
        </Box>
        <TextArea
          disabled
          id="aboutme"
          onChange={this.handleChange}
          placeholder=""
          value={this.state.value}
        />
      </Box>
    );
  }
}

export default DisabledTextAreaField;