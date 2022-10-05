import {  CoronavirusSharp, Flare, FullscreenExit, HomeOutlined, Mail , NoEncryption, Notifications, RemoveCircleOutline, SearchOutlined} from "@mui/icons-material";
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import react, { useState } from "react";
import styled from "styled-components";
import Profile from "../img/bg.jpg";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    fontFamily:"Roboto",
    justifyContent:"space-between",
})
const Search = styled("div")(({theme})=>({
    padding:"0 10px",
    borderRadius:"5px",
    color:"black",
    width:"40%",
    display:"flex",
    alignItems:"center",
    backgroundColor:"white",
    border:"1px solid gray",
    [theme.breakpoints.down("sm")]:{
        display:"none"
    }
}))
const Msearch = styled("div")(({theme})=>({
    border:"white",
    padding:"0 10px",
    borderRadius:"5px",
    color:"black",
    width:"60%",
    display:"flex",
    backgroundColor:"white",
    alignItems:"center",
    border:"1px solid gray",
    justifyContent:"space-between",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))
const SIcon =styled("span")(({theme})=>({
color:"gray",
fontSize:"25px",
[theme.breakpoints.down("sm")]:{
    display:"block"
}
}))
const MobileSearch =styled("span")(({theme})=>({
    color:"white",
    display:"none",
    [theme.breakpoints.down("sm")]:{
        display:"block",
    }
    }))
    

const Icons = styled(Box)(({theme})=>({
    padding:"0 10px",
    borderRadius:"5px",
    color:"red",
    display:"none",
    alignItems:"center",
    gap:"20px",
    cursor:"pointer",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
 
}))
const UserBox= styled(Box)(({theme})=>({
    padding:"0 10px",
    borderRadius:"5px",
    display:"flex",
    alignItems:"center",
    gap:"10px",
    cursor:"pointer",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    
}))
// const Icons = styled(Box)({
//     padding:"0 10px",
//     borderRadius:"5px",
//     color:"red",
//     display:"flex",
//     alignItems:"center",
//     gap:"20px"
// })
const Navbar = ()=>{
    const [open,setOpen] =useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mode, setMode] = useState("light")
    return (
        
        <AppBar position="sticky">
            <StyledToolbar bgcolor={"background.default"} color={"text.primary"}>
                <Typography color="white" variant="h6" sx={{display:{xs:"none",sm:"block"},fontWeight:"bold",padding:"0px"}}>
                    Shakil
                </Typography>
                <HomeOutlined sx={{display:{xs:"block",sm:"none"},fontSize:"35px"}}/>
                {
                searchOpen? 
                 (<Msearch sx={{display:{xs:"block",sm:"none"},color:"black",width:{xs:"90%",sm:"70%"}}}><InputBase sx={{fontSize:"18px",color:"black"}} placeholder="Search"/><SIcon><RemoveCircleOutline onClick={(e)=>setSearchOpen(false)}/></SIcon></Msearch>):""
                }
                <Search sx={{width:{xs:"90%",sm:"50%"},color:"black"}}><InputBase sx={{fontSize:"18px",width:"90%",color:"black"}} placeholder="Search"/><SIcon d="flex" alignItems="center" flex={1}><SearchOutlined/></SIcon></Search>
                
                <Icons >
               
                    <Badge badgeContent={4} color="error">
                        <Mail sx={{fontSize:"25px",color:"white"}}/>
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications sx={{fontSize:"25px",color:"white"}}/>
                    </Badge>
                    <Avatar sx={{width:30,height:30}} src={Profile} onClick={(e)=>setOpen(true)}/>
                </Icons>
                
                { searchOpen ? "":(<UserBox>
                <MobileSearch onClick={(e)=>setSearchOpen(true)}><SearchOutlined color="text.primary" sx={{fontSize:"35px"}}/></MobileSearch>
                    <Avatar sx={{width:30,height:30}} src={Profile} onClick={(e)=>setOpen(true)}/>
                    <Typography variant="span">Shakil</Typography>
                </UserBox>)}
            </StyledToolbar>
            { searchOpen ? "":(<Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                onClose={(e)=>setOpen(false)}
                open={open}
                anchorOrigin={{
                    vertical:"top",
                    horizontal:"right",
                }}
                transformOrigin={{
                    vertical:"top",
                    gorizontal:"left",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>

            </Menu>)}
        </AppBar>
        
        
    )
}
export default Navbar