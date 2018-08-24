import React from "react";
import { Box, Text, RadioButton, Label} from "gestalt";
import "gestalt/dist/gestalt.css";


        class RadioBtnGroup extends React.Component {
            constructor(props) {
              super(props);
              this.state = { viewmode: undefined };
            }
            render() {
              return (
                <Box role="list" display="flex" direction="column">
                  <Box alignItems="center" paddingY={1} display="flex" direction="row">
                    <RadioButton size="md"
                      checked={this.state.viewmode === 'cross'}
                      id="viewmode_cross"
                      name="viewmode"
                      onChange={() => this.setState({ viewmode: 'cross' })}
                      value="cross"
                    />
                    <Box flex="grow">
                      <Label htmlFor="viewmode_cross">
                        <Box paddingX={2}>
                          <Text>가로 형</Text>
                        </Box>
                      </Label>
                    </Box>
                  </Box>

                
                  <Box alignItems="center" paddingY={1} display="flex" direction="row">
                    <RadioButton size="md"
                      checked={this.state.viewmode === 'vertical'}
                      id="viewmode_vertical"
                      name="viewmode"
                      onChange={() => this.setState({ viewmode: 'vertical' })}
                      value="vertical"
                    />
                    <Box flex="grow">
                      <Label htmlFor="viewmode_vertical">
                        <Box paddingX={2}>
                          <Text>세로 형</Text>
                        </Box>
                      </Label>
                    </Box>
                  </Box>                 
                </Box>
              );
            }
          }      

        export default RadioBtnGroup;
