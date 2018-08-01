import React from "react";
import { Button, Box, Column,Text, Avatar, Icon, Heading, Container } from "gestalt";
import "gestalt/dist/gestalt.css";

class BtnLessCard extends React.Component {

    
    render() {
    return(
    <div>
 
        <Box maxWidth={236} display="flex" direction="row" padding={2} Column={12} >
       
         <Box  padding={1}>
           <Box  paddingX={2} >
           <Avatar name="Park" size="lg" />
         </Box>
        </Box>
      
       
         <Box  paddingX={1}>
        <Box  paddingY={3} >
        <Text inline size="xl" bold>abc@compnay.com</Text>
        <Text inline size="sm"color="red"> 초대 : 2018년 7월 6일 (2일전)</Text>
       </Box>
        </Box>
       
        
      
        </Box>
        
</div>


     );
   }
}

export default BtnLessCard;