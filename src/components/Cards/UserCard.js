import React from "react";
import { Button, Box, Column,Text, Avatar, Icon, Heading, Container } from "gestalt";
import "gestalt/dist/gestalt.css";

class UserCard extends React.Component {

    
    render() {
    return(
    <div>
 
        <Box maxWidth={236} display="flex" direction="row" padding={2} Column={12} >
       
         <Box  padding={1}>
           <Box  paddingX={2} >
           <Avatar name="Park" size="lg" />
         </Box>
        </Box>
      
       
         <Box  padding={1}>
        <Box  paddingY={3} >
        <Text inline size="xl" bold>박 보검</Text>
        <Text>abc@compnay.com</Text>
       </Box>
        </Box>
       
       
        <Box column={5} paddingY={4} paddingX={2}>
        <Button  text="master" size="sm" color="black" color="blue" inline/>
        
       
        </Box>
       
        <Box paddingY={4} paddingX={1}>
        <Button text="member" size="sm" color="black"  inline/>
        </Box>
       



       
        </Box>
        
</div>


     );
   }
}

export default UserCard;