import React from "react";
import { Box, Text, RadioButton, Label} from "gestalt";
import "gestalt/dist/gestalt.css";


class RadioBtn extends React.Component {
  render() {
    return (
    
            <Box alignItems="center" display="flex" direction="row" color="red">
            <RadioButton  size="sm" id="cross" checked onChange={() => {}} value="cross" />
            <Box flex="grow">
               <Label htmlFor={this.props.htmlFor}>
                 <Box paddingX={3} paddingY={12}>
                  <Text size="sm">Corss</Text>
                 </Box>
               </Label>
             </Box>
           </Box>

    );
  }
}

export default RadioBtn;
