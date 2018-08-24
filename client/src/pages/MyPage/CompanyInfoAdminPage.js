import React from "react";
import { BasicInput } from "components/InputForm";
import { TextAreaField } from "components/InputTextField";
import { SearchAddress } from "components/Button";
import { Button, Box, Column,Text, Avatar, Icon, Heading, Container, Modal } from "gestalt";
import "gestalt/dist/gestalt.css";
import "./CompanyInfoAdminPage.css"
import { RadioBtnGroup } from "components/RadioButton";
import DaumPostcode from 'react-daum-postcode';
import { Sidebar, MiddleNavbar } from 'components/LayOut'
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { FormGroup, Label, Input, FormText } from 'reactstrap';



class CompanyInfoAdminPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggleModal = this._handleToggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      showModal: false,
    };
  }
  

  _handleToggleModal() {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  }

  handleAddress = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  handleSubmit(event, errors, values) {
    this.setState({errors, values});
  }

  

  render() {
    const { showModal } = this.state;
    return (
      <div>
       <AvForm onSubmit={this.handleSubmit}>
      <Box ClassName="fullbox"
        display="flex" 
        
      
        
      >
      <Column span={1}> 
        <Box ClassName="sidebar"
        color="navy" 
        padding={1} 
        position="relative" height={900} 
        >

          <Sidebar />
        
        </Box>
      </Column>

      <Column span={11}>
      <MiddleNavbar />

        <Box position="relative" padding={12}>
          <Box color="white" padding={1}>
          <Box color="white" paddingY={2}>
            <span>
             <Heading size="sm">회사 정보 관리</Heading>
            </span>
            <span>
             <Heading size="xs">이 페이지에서 관리하는 정보는 우리 회사 채용 홈페이지의 내용이 됩니다.</Heading>
            </span>
          </Box>

          
          <Box display="flex" direction="row" paddingY={2}>
          <Column span={4}>
           <Box color="white" padding={1}>
             <Box color="white" paddingX={2}>
             <AvGroup>
            <Label for="companyname">회사명</Label>
            <AvInput name="companyname" id="companyname" value="STDIO.H" required />
            <AvFeedback>회사명이 빠졌습니다.</AvFeedback>
            </AvGroup>
           </Box>
          </Box>
          </Column>
          <Column span={4}>
           <Box color="white" padding={1}>
          <Box color="white" paddingX={2}>
          <AvGroup>
            <Label for="companyhomepage">홈페이지</Label>
            <AvInput name="CompanyHomepage" id="companyhomepage" />
          </AvGroup>     
         </Box>
          </Box>
          </Column>
          </Box>


             
          <Box display="flex" direction="row" paddingY={2}>
          <Column span={4}>
           <Box color="white" padding={1}>
             <Box color="white" paddingX={2}>
            <AvGroup>
            <Label for="HomepageAddressSetting">채용 홈페이지 주소 설정</Label>
            <AvInput name="HomepageAddressSetting" id="HomepageAddressSetting" required />
            <AvFeedback>필수값입니다.</AvFeedback>
            </AvGroup>             
           </Box>
          </Box>
          </Column>
          <Column span={4}>
           <Box color="white" padding={1}>
          <Box color="white" paddingX={2}>
          <FormGroup>
            <Label for="CompanyLogo">로고</Label>
            <Input type="file" name="CompanyLogo" id="CompanyLogo" />
          </FormGroup>   
         </Box>
          </Box>
          </Column>

          </Box>

        
        <Box display="flex" direction="row" paddingY={2}>
          <Column span={6}>
           <Box color="white" padding={1}>
             <Box color="white" paddingX={2}>
             <FormGroup>
            <Label for="CompanyAddress">주소</Label>
            <Input name="CompanyAddress" id="CompanyAddress" disabled/>
          </FormGroup>             
              </Box>
            </Box>
          </Column>

          <Column span={1}>
           <Box color="white" padding={3}>
          <Box color="white" paddingY={4} >
           <Box padding={1}>
           <Button
            text="주소 찾기"
            onClick={this.handleToggleModal}
            color="blue"
          />
          {showModal && (
            <Modal       
              accessibilityCloseLabel="close"
              accessibilityModalLabel="View default padding and styling"
              heading="주소 찾기"
              onDismiss={this.handleToggleModal}
              footer={
                <Box color="gray">
                  <Heading size="sm"> </Heading>
                </Box>
              }
              size="lg"
            >
              <Box color="gray" height={400}>
                <Heading size="sm">  
                  <DaumPostcode
                   onComplete={this.handleAddress}/>
                </Heading>
              </Box>
            </Modal>
          )}
           </Box>
         </Box>
          </Box>
          </Column>
          </Box>

          <Box display="flex" direction="row" paddingY={2}>
            <Column span={8}>
              <Box color="white" padding={1}>
                <Box color="white" paddingX={2} width={1080}>
                  <TextAreaField
              
                  />
               </Box>
              </Box>
            </Column>
          </Box>

          <hr />

          {/* Radios */}
          <AvRadioGroup inline name="cross/vertical" required>
          <AvRadio label="가로형" value="corss" />
          <AvRadio label="세로형" value="vertical" />
          </AvRadioGroup>


         
          <Box padding={2}>
       
          <Column span={2}>
              <Box color="white" padding={1}>
                <Box color="white" paddingX={2}>
                <Button
                   text="저장 / 수정 확인"
                  onClick={this.handleSubmit}
                  color="blue"
                />
               </Box>
              </Box>
            </Column>
         
          </Box>
        </Box> 
      </Box>
      </Column>
    </Box>

    </AvForm>
        {this.state.values && <div>
        <h5>json</h5>
        Invalid: {this.state.errors.join(', ')}<br />
        Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
    </div>

    );
  }
}

export default CompanyInfoAdminPage;
