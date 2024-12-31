import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })

// (({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));



export default function RecipeReviewCard({sendBackCardData}) {
  const [expanded, setExpanded] = React.useState(false);
 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [CardData, setCardData] = React.useState({
    Title: '',
    Image: '',
    About: '',
  })



  const getFormattedDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

const sendBackData=()=>{

  sendBackCardData({...CardData,time:getFormattedDate()})

}


  return (

<Box sx={{display:"flex",justifyContent:"space-between"}}>
<Box>

<Grid container spacing={2}>
<Grid item xs={6}>
            <Button variant="contained" color="success" endIcon={<SendIcon />} onClick={sendBackData}>Complete</Button>
          </Grid>
  <Grid item xs={8}>
   
<TextField id="filled-basic" label="Title" variant="filled" value={CardData.Title} onChange={(e)=>(setCardData({...CardData,Title:e.target.value}))}/>
  </Grid>
  <Grid item xs={8}>
   
<TextField id="filled-basic" label="Image" variant="filled" value={CardData.Image} onChange={(e)=>(setCardData({...CardData,Image:e.target.value}))}/>
  </Grid>
  <Grid item xs={8}>
   
<TextField id="filled-basic" label="About " variant="filled" value={CardData.About} onChange={(e)=>(setCardData({...CardData,About:e.target.value}))}/>
  </Grid>


</Grid>

</Box>



    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={CardData.Title ?CardData.Title  : "Enter Title"}
        subheader={getFormattedDate()}
      />
      <CardMedia
        component="img"
        height="194"
        image={CardData.Image}
        alt="Enter Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary"    sx={{ 
              width: CardData && CardData.About.length >= 43 ? '100%':400, 
              whiteSpace: 'pre-wrap', 
              wordBreak: 'break-word'
            }}>
       {/* This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,sd
          if you like.  */}
          {CardData.About}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Typography variant="body2" color="primary"  >
MCQ: 100

              </Typography>
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
     
     
      
      <Button variant="contained" sx={{marginLeft:"auto"}}>Start Test</Button>
   
  <p>
    
  </p>

      </CardActions>

    </Card>


    </Box>
  );
}
