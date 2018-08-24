import React from "react";
import { Button, Box, Modal, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";



class JoinTerm extends React.Component {
    constructor(props) {
      super(props);
      this.handleToggleModal = this._handleToggleModal.bind(this);
      this.state = {
        showModal: false,
      };
    }
  
    _handleToggleModal() {
      this.setState(prevState => ({ showModal: !prevState.showModal }));
    }
  
    render() {
      const { showModal } = this.state;
      return (
        <Box marginLeft={-1} marginRight={-1}>
          <Box padding={1}>
            <Button
              text="내용보기"
              onClick={this.handleToggleModal}
            />
            {showModal && (
              <Modal
                accessibilityCloseLabel="close"
                accessibilityModalLabel="View default padding and styling"
                heading="이용약관"
                onDismiss={this.handleToggleModal}
                footer={
                  <Box color="gray">
                    <Heading size="sm">버튼</Heading>
                  </Box>
                }
                size="lg"
              >
                <Box color="gray" height={600}>
                  <Heading size="sm">내용</Heading>
                </Box>
              </Modal>
            )}
          </Box>
        </Box>
      );
    }
  }

  export default JoinTerm;