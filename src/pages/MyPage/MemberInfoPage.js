import React from "react";
import { Sidebar } from "components/LayOut";
import { BasicInput } from "components/InputForm";
import { TextAreaField } from "components/InputTextField";
import { RadioBtnGroup } from "components/RadioButton";
import { Button, Box, Column,Text, Avatar, Icon, Heading, Label, Link } from "gestalt";
import "gestalt/dist/gestalt.css";
import "./CompanyInfoAdminPage.css"


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
        position="relative" height={1200} 
        >
        <Sidebar />
        
        </Box>
      </Column>

      <Column span={11}>
        <Box position="relative" padding={12}>
          <Box color="white" padding={1}>
          <Box color="white" paddingY={2}>
            <Box marginBottom={7}>
             <Heading size="sm">회사 정보 관리</Heading>
            </Box>
            <Box marginBottom={3}>
             <Heading size="xs">이 페이지에서 관리하는 정보는 우리 회사 채용 홈페이지의 내용이 됩니다.</Heading>
            </Box>
          </Box>

          
          <Box display="flex" direction="row" paddingY={2}>
          <Column span={4}>
           <Box color="white" padding={1}>
             <Box color="white" paddingX={2}>
             <BasicInput
                htmlFor="name"
                title="이 름"
                signinfo="name"
                signplaceholder="name"
                signtype="name"
          />
           </Box>
          </Box>
          </Column>
          <Column span={4}>
           <Box color="white" padding={1}>
          <Box color="white" paddingX={2}>
          <BasicInput
            htmlFor="email"
            title="이메일"
            signinfo="email"
            signplaceholder="abc@company.com"
            signtype="email"
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
                htmlFor="telephone"
                title="전화번호"
                signinfo="telephone"
                signplaceholder="010-1111-2222"
                signtype="telephone"
          />
           </Box>
          </Box>
          </Column>
          <Column span={4}>
           <Box color="white" padding={1}>
          <Box color="white" paddingX={2}>
          <BasicInput
            htmlFor="department"
            title="소속"
            signinfo="department"
            signplaceholder="금융개발3팀"
            signtype="department"
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
                htmlFor="picture"
                title="사진"
                signinfo="picture"
                signplaceholder="picture"
                signtype="picture"
          />
            
              </Box>
            </Box>
          </Column>

          <Column span={1}>
           <Box color="white" padding={3}>
          <Box color="white" paddingY={4} >
           <Box padding={1}>
            <Text> 사진은 JPG, Png 형식으로 2M 이하를 사용해 주세요 </Text>
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

            <Box marginLeft={3}>
              <Text bold inline size="md">채용 홈페이지 레이 아웃(Lay out) 선택</Text>
            </Box>  

            <Box marginBottom={5}>
              <RadioBtnGroup />
            </Box>

            <Box display="flex" direction="row">
              <Column span={8}>
                <Box color="darkGray" padding={2}>
                  <Text color ="white"> 임시 </Text>
                  <Box height={200} />
                  <Text color ="white">With lots of content </Text>
                </Box>
               </Column>                 
            </Box>


          <Box display="flex" direction="row">
            <Column span={8}>
              <Box color="red" padding={8}>
                <Link>
                  <Button 
                  text="저장/ 수정 확인" inline />
                </Link>
              </Box>
            </Column>
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
