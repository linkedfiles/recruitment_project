import React from "react";
import { Modal, Box, Button, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";

class popup extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleSmall = this._handleToggleSmall.bind(this);
    this.handleToggleMedium = this._handleToggleMedium.bind(this);
    this.handleToggleLarge = this._handleToggleLarge.bind(this);
    this.state = {
      sm: false,
      md: false,
      lg: false
    };
  }

  _handleToggleSmall() {
    this.setState(prevState => ({ sm: !prevState.sm }));
  }

  _handleToggleMedium() {
    this.setState(prevState => ({ md: !prevState.md }));
  }

  _handleToggleLarge() {
    this.setState(prevState => ({ lg: !prevState.lg }));
  }

  render() {
    const { sm, md, lg } = this.state;
    return (
      <Box width={100}>
        <Box padding={1}>
          <Button text="button" onClick={this.handleToggleSmall} />
          {sm && (
            <Modal
              accessibilityCloseLabel="close"
              accessibilityModalLabel="View default padding and styling"
              heading="비밀번호 재설정"
              onDismiss={this.handleToggleSmall}
              footer={<Button text="닫기" onClick={this.handleToggleSmall} />}
              size="sm"
            >
              <Box padding={2}>
                <Heading size="sm">안내내용</Heading>
              </Box>
            </Modal>
          )}
        </Box>
      </Box>
    );
  }
}

export default popup;
