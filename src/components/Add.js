import { Avatar, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";
import { Box, Stack } from '@mui/system';
import UserPhoto from "../img/shakil9.jpg"
const StyledModal = styled(Modal)({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",

})
const UserBox = styled(Box)({
  display:"flex",
 gap:"15px",
 marginBottom:"20px",
  alignItems:"center",

})
const Add = () => {
  const [open, setOpen] = useState(false)
  return (
  <Box bgcolor={"background.default"} color={"text.primary"}>  
    <Tooltip onClick={(e)=>setOpen(true)} title="Add Your Post" sx={{position:"fixed",bottom:20,left:{xs:"calc(50% - 25px)",sm:"calc(50% - 25px)",md:30}}}>
        <Fab color="primary" aria-label="add">
            <AddIcon/>
        </Fab>
    </Tooltip>
    <StyledModal 
      open={open}
      onClose={(e)=>setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box width={400} height={280} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
        <Typography variant="h6" color="gray" fontWeight={500} textAlign="center">
          Create Post
        </Typography>
        <UserBox>
          <Avatar
            src={UserPhoto}
            sx={{width:35, height:35}}
          />
          <Typography variant="span" fontWeight={600}>
            Mohammed Shakil
          </Typography>
        </UserBox>
        <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={2}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
             <EmojiEmotions color="primary"/>
             <Image color="secondary"/>
             <VideoCameraBack color="success"/>
             <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
          <Button>
            Post
          </Button>
          <Button sx={{width:"100px"}}><DateRange/></Button>
        </ButtonGroup>
       </Box>
      </StyledModal>
    </Box>
  )
}

export default Add