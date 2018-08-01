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
<<<<<<< HEAD
      <Box>
        <Box marginBottom={2}>
          <Label htmlFor={this.props.htmlFor}>
            <Text>{this.props.title}</Text>
=======
      <div>
        <Box marginTop={2} marginBottom={2}>
          <Label htmlFor={this.props.htmlFor}>
            <Text size="sm">{this.props.title}</Text>
>>>>>>> a8539968f1bcb726f66e3f6ad2b4ab6d81648026
          </Label>
        </Box>
        <TextField
          id={this.props.signinfo}
          onChange={this.handleChange}
          placeholder={this.props.signplaceholder}
          value={this.state.value}
          type={this.props.signtype}
<<<<<<< HEAD
        />
      </Box>
=======
          size="sm"
          height={30}
        />
      </div>
>>>>>>> a8539968f1bcb726f66e3f6ad2b4ab6d81648026
    );
  }
}

<<<<<<< HEAD
export default BasicInput;
=======
export default BasicInput;
>>>>>>> a8539968f1bcb726f66e3f6ad2b4ab6d81648026
