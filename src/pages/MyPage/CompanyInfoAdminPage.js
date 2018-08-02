import React from "react";
import { Sidebar } from "components/LayOut";
import { BasicInput } from "components/InputForm";
import { TextAreaField } from "components/InputTextField";
import { Button, Box, Column,Text, Avatar, Icon, Heading, Container } from "gestalt";
import "gestalt/dist/gestalt.css";
import "./CompanyInfoAdminPage.css"
import { RadioBtnGroup } from "components/RadioButton";


class CompanyInfoAdminPage extends React.Component {
  render() {
    return (
      <div>
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
             <BasicInput
                htmlFor="company"
                title="회사명"
                signinfo="company"
                signplaceholder="Company Name"
                signtype="company"
          />
           </Box>
          </Box>
          </Column>
          <Column span={4}>
           <Box color="white" padding={1}>
          <Box color="white" paddingX={2}>
          <BasicInput
            htmlFor="homepage"
            title="홈페이지"
            signinfo="homepage"
            signplaceholder="WebSite URL"
            signtype="homepage"
          />
         </Box>
          </Box>
          </Column>
          </Box>


             
          <Box display="flex" direction="row" paddingY={2}>
          <Column span={4}>
           <Box color="white" padding={1}>
             <Box color="white" paddingX={2}>
             <BasicInput
                htmlFor="company"
                title="채용 홈페이지 주소 설정"
                signinfo="company"
                signplaceholder="Company Name"
                signtype="company"
          />
           </Box>
          </Box>
          </Column>
          <Column span={4}>
           <Box color="white" padding={1}>
          <Box color="white" paddingX={2}>
          <BasicInput
            htmlFor="logo"
            title="로고"
            signinfo="logo"
            signplaceholder="logo"
            signtype="logo"
          />
          
         </Box>
          </Box>
          </Column>

          </Box>

        
        <Box display="flex" direction="row" paddingY={2}>
          <Column span={6}>
           <Box color="white" padding={1}>
             <Box color="white" paddingX={2}>
             <BasicInput
                htmlFor="address"
                title="주소"
                signinfo="address"
                signplaceholder="adress"
                signtype="address"
          />
            
              </Box>
            </Box>
          </Column>

          <Column span={1}>
           <Box color="white" padding={3}>
          <Box color="white" paddingY={4} >
           <Box padding={1}>
            <Button color="blue" text= "주소찾기" />
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

          <RadioBtnGroup />


         
          <Box padding={2}>
            <Button text="수정/ 확인" inline />
          </Box>
        </Box>
        
      </Box>
      </Column>
    </Box>

  
    </div>

    );
  }
}

export default CompanyInfoAdminPage;
