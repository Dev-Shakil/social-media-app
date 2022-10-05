import React from 'react'
import { CheckBox, Favorite, FavoriteBorder, MoreVert ,Share } from '@mui/icons-material'
import { Avatar, Typography, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Checkbox } from '@mui/material';


const FeedCard = ({p}) => {
  return (
    <Card sx={{marginBottom:"10px",width:{xs:"100%",sm:"90%"}}} p={2}>
    <CardHeader
    avatar={
      <Avatar sx={{bgcolor:"red"}} aria-label="recipe">
        S 
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVert/>
      </IconButton>
      
    }
    title="Shrimp and Chorizo Paella"
    subheader="September 28, 2018"
    />
    <CardMedia
    component="img"
    height="20%"
    image={p}
    alt="PostImg"
    />
    <CardContent>
      <Typography variant="body3" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
      </IconButton>
      <IconButton aria-label="share">
        <Share/>
      </IconButton>
    </CardActions>
    

  </Card>
  )
}

export default FeedCard