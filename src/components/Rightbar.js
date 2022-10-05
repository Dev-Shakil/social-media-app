
import { autocompleteClasses, Avatar, AvatarGroup, Box, Divider,styled, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, SliderThumb, Typography } from '@mui/material'
import React from 'react'

import Photo from "../img/bg1.jpg";
import Photo1 from "../img/bg.jpg";
import Photo2 from "../img/shakil8.jpg";
import Photo3 from "../img/shakil10.jpg";
import Photo4 from "../img/shakil11.jpg";
import Photo5 from "../img/shakil9.jpg";

const WrapperBox = styled(Box)(({theme})=>({
  height:"90vh",
  position:"fixed",
  overflowY:"auto",
  // &::-webkit-scrollbar{
  //   display:"none"
  // }


}));
const Rightbar = () => {
  return (
    
    <Box flex={2} bgcolor={"background.default"} color={"text.primary"} p={1} sx={{display:{xs:"none",md:"block"},}}>
      <WrapperBox className='hello' sx={{width:{md:"350px",sm:"250px"}}}>
          <Typography variant="h6" pb={1}>
            Online Friends
          </Typography>
          <AvatarGroup max={6} sx={{display:"flex",justifyContent:"start"}}>
            <Avatar alt="Shakil" src={Photo} />
            <Avatar alt="Shakil" src={Photo1} />
            <Avatar alt="Shakil" src={Photo2} />
            <Avatar alt="Shakil" src={Photo3} /> <Avatar alt="Shakil" src={Photo4} />
            <Avatar alt="Shakil" src={Photo5} />
            <Avatar alt="Shakil" src="/static/bg1.jpg/" />
           
          </AvatarGroup>
          <Typography variant="h6" pt={2} pb={1}>
            Latest Photos
          </Typography>
          <ImageList sx={{cols:{md:"2"}}} pr={2} cols={3} rowHeight={100} >
            <ImageListItem sx={{width:{md:"100%",sm:"70%"}}} >
              <img src={Photo} alt=""/>
            </ImageListItem>
            <ImageListItem sx={{width:{md:"100%",sm:"70%"}}} >
              <img src={Photo1} alt=""/>
            </ImageListItem>
            <ImageListItem sx={{width:{md:"100%",sm:"70%"}}} >
              <img src={Photo2} alt=""/>
            </ImageListItem>
            <ImageListItem sx={{width:{md:"100%",sm:"70%"}}} >
              <img src={Photo3} alt=""/>
            </ImageListItem>
            <ImageListItem sx={{width:{md:"100%",sm:"70%"}}} >
              <img src={Photo4} alt=""/>
            </ImageListItem>
            <ImageListItem sx={{width:{md:"100%",sm:"70%"}}} >
              <img src={Photo5} alt=""/>
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" pt={2} pb={1}>
            Latest Conversations
          </Typography>
          <List sx={{width:"100%",maxWidth:360}}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={Photo}/>
              </ListItemAvatar>
              <ListItemText 
                     primary={<Typography >Shakil Hossain</Typography>}
                    secondary={
                      <React.Fragment>
                        <Typography
                            sx={{display:"inline"}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >Ali connors</Typography>
                            {"- I'll be in your neighberhood doing errands this.."}
                        
                      </React.Fragment>
                    }
                    />
            </ListItem>
            <Divider variant="inset" conponent="li"/>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={Photo1}/>
              </ListItemAvatar>
              <ListItemText 
                    primary={<Typography>Shakil Hossain</Typography>}
                    secondary={
                      <React.Fragment>
                        <Typography
                            sx={{display:"inline"}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >Ali connors</Typography>
                            {"- I'll be in your neighberhood doing errands this.."}
                        
                      </React.Fragment>
                    }
                    />
            </ListItem>
            <Divider variant="inset" conponent="li"/>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={Photo2}/>
              </ListItemAvatar>
              <ListItemText 
                    primary={<Typography>Shakil Hossain</Typography>}
                    secondary={
                      <React.Fragment>
                        <Typography
                            sx={{display:"inline"}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >Ali connors</Typography>
                            {"- I'll be in your neighberhood doing errands this.."}
                        
                      </React.Fragment>
                    }
                    />
            </ListItem>
            <Divider variant="inset" conponent="li"/>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={Photo3}/>
              </ListItemAvatar>
              <ListItemText 
                     primary={<Typography>Shakil Hossain</Typography>}
                    secondary={
                      <React.Fragment>
                        <Typography
                            sx={{display:"inline"}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >Ali connors</Typography>
                            {"- I'll be in your neighberhood doing errands this.."}
                        
                      </React.Fragment>
                    }
                    />
            </ListItem>
            <Divider variant="inset" conponent="li"/>
            
          </List>
      </WrapperBox>
    </Box>
  )
}

export default Rightbar