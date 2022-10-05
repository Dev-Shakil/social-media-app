import { ClassNames } from '@emotion/react'
import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Switch } from '@mui/material'
import React from 'react'

const Text = styled(ListItemText)(({theme})=>({
  [theme.breakpoints.down("sm")]:{
    display:"none"
},
  [theme.breakpoints.down("md")]:{
    display:"none"
}
}))
const SidebarBox = styled(Box)(({theme})=>({
  height:"95vh",
  marginRight:"20px",
  [theme.breakpoints.down("xs")]:{
    marginRight:"15px"
},
  [theme.breakpoints.down("sm")]:{
    width:"50px",
    marginRight:"15px",
   height:"93vh",
    
},
[theme.breakpoints.down("md")]:{

 marginRight:"0px"
}
}))
const Wrapper = styled(Box)(({theme})=>({
  position:"fixed",

  [theme.breakpoints.down("sm")]:{
   position:"fixed",
   color:"red",
   width:"50px",
   display:"flex",
   justifyContent:"center",
   margin:"0",
   height:"93vh",
   backgroundColor:"blue",
},
  [theme.breakpoints.down("md")]:{
   
   
   margin:"0",
   height:"93vh",
   backgroundColor:"blue",
}
}))
const Icon = styled(ListItemIcon)(({theme})=>({
  width:"50px",
  minWidth:"50px",
  height:"30px",
  fontSize:"25px",
  [theme.breakpoints.down("sm")]:{
    color:"white",
   width:"40px",
    display:"flex",
    justifyContent:"center",
   
},
  [theme.breakpoints.down("md")]:{

    color:"white",
    display:"flex",
    justifyContent:"center"
}
}))

const Sidebar = ({setMode,mode}) => {
  return (
    
        <SidebarBox sx={{flex:{xs:".4",sm:"1"}}} p={0} >
          <Wrapper sx={{position:"fixed",margin:"0",padding:"0"}} >
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#">
                  <Icon>
                    <Home/>
                  </Icon>
                  <Text className="text" primary="Home"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#">
                  <Icon>
                    <Group/>
                    </Icon>
                   <Text primary="Groups"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#">
                  <Icon pr={10}>
                    <Pages/>
                  </Icon>
                  <Text primary="Pages"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#">
                  <Icon>
                    <Storefront/>
                  </Icon>
                  <Text primary="Marketplace"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#">
                  <Icon>
                    <Person/>
                  </Icon>
                  <Text primary="Friends"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#">
                  <Icon>
                    <Settings/>
                  </Icon>
                  <Text primary="Settings"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#">
                  <Icon>
                    <AccountBox/>
                  </Icon>
                  <Text primary="Profile"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#">
                  <ListItemIcon sx={{display:{xs:"none",sm:"none",md:"block"}}}>
                    <ModeNight/>
                  </ListItemIcon>
                  <ListItemIcon onClick={()=>setMode(mode==="dark"?"light":"dark")}>
                    <Switch/>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            </Wrapper>
        </SidebarBox>
 
  )
}

export default Sidebar