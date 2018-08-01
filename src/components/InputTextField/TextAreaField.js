import React from "react";
import { Text, TextField, Box, Label, TextArea } from "gestalt";
import "gestalt/dist/gestalt.css";

class TextAreaField extends React.Component {
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
          <Label htmlFor="aboutany">
            <Text>회사 소개</Text>
          </Label>
        </Box>
        <TextArea
          id="aboutany"
          onChange={this.handleChange}
          placeholder=""
          value={this.state.value}
        />
      </Box>

     
    );
  }
}



export default TextAreaField;