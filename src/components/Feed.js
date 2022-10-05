
import {Box } from '@mui/material'
import React from 'react'
import Card from './FeedCard'
import Photo from "../img/bg1.jpg";
import Photo1 from "../img/bg.jpg";
import Photo2 from "../img/shakil8.jpg";
import Photo3 from "../img/shakil10.jpg";
import Photo4 from "../img/shakil11.jpg";
import Photo5 from "../img/shakil9.jpg";
const Feed = () => {
  return (
  
         <Box sx={{flex:{xs:"4.6",sm:"4"},width:{xs:"100%",sm:"80%",md:"100%"},marginLeft:{xs:"15px",sm:"0px",md:"20px"}}} p={1}>
           <Card p={Photo1}/>
           <Card p={Photo}/>
           <Card p={Photo2}/>
           <Card p={Photo3}/>
           <Card p={Photo4}/>
           <Card p={Photo5}/>
         
        </Box>
  
  )
}

export default Feed