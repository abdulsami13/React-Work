import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";

import Card1 from "../../Images/Card1.png"

import card2 from "../../Images/card2.png"
import card3 from "../../Images/card3.png"



import "../MainPageStyle.css"

export default function CardProgram( ){



    return(

        <Box>

<div className=" CardbackgroundImage">

<Grid container spacing={2} sx={{justifyContent:"center",alignContent:"center",alignItems:"center" ,alignSelf:"center"}} my={5}>
  <Grid item xs={5}  sx={{textAlign:"center"}}>
  <Typography variant="h5" >
      Our Programs
      </Typography>
      <Typography variant="p"  >
      EduKid opend its doors in 1998 width a unique version to provide students with a globally focused study of arts
      </Typography>
  </Grid>
</Grid>

<Grid container spacing={2} mt={3} sx={{justifyContent:"center",alignContent:"center",alignItems:"center" ,alignSelf:"center"}}>
  <Grid item xs={3} >


  <Card sx={{ maxWidth: 305, borderRadius:5}}  >
      <CardMedia
        sx={{marginX:3, height: 200,objectFit:"contain",marginTop:3 }}
       
        image={Card1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         Settling
        </Typography>
        <Typography variant="body2" color="text.secondary">
        To round out our weekend of celebrations, we are holding our reunion.
        </Typography>
      </CardContent>
      <Box
      mx={5}
      my={2}
      py={1}
      sx={{
        
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'primary.main',
        color: 'text.secondary',
        justifyContent:"space-around",
        '& svg': {
          m: 1,
        },
      }}
    >
      {/* <FormatBoldIcon /> */}

      <Box width={130}>

      <Box sx={{textAlign:"center"}}>

      <Typography variant="h6" fontSize={"small"} fontWeight={"bold"} color="white" mx={2}>
   4-5 Yrs
     </Typography>
 
      </Box>
     <Box sx={{textAlign:"center"}} color={"white"}>


     <Typography variant="p" fontSize={11}>
    age
     </Typography>
     </Box>
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />

      <Box width={130}>

<Box sx={{textAlign:"center"}}>

<Typography variant="h6" fontSize={"small"} fontWeight={"bold"} color="white" mx={3}>
3 days
</Typography>

</Box>
<Box sx={{textAlign:"center"}} color={"white"}>


<Typography variant="p" fontSize={11}>
weekly
</Typography>
</Box>
</Box>






<Divider orientation="vertical" variant="middle" flexItem />






<Box width={130}>

<Box sx={{textAlign:"center"}}>

<Typography variant="h6" fontSize={"small"} fontWeight={"bold"} color="white" mx={2}>
3.30 hrs
</Typography>

</Box>
<Box sx={{textAlign:"center"}} color={"white"}>


<Typography variant="p" fontSize={11}>
period
</Typography>
</Box>
</Box>


      {/* <FormatItalicIcon /> */}
    </Box>
    </Card>


  </Grid>
  <Grid item xs={3}>

  <Card sx={{ maxWidth: 305, borderRadius:5}}  >
      <CardMedia
        sx={{marginX:3, height: 200,objectFit:"contain",marginTop:3 }}
       
        image={card2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Play Group
        </Typography>
        <Typography variant="body2" color="text.secondary">
        We will be magically transforming the School’s Sports Center into a full game area.
        </Typography>
      </CardContent>
      <Box
      mx={5}
      my={2}
      py={1}
      sx={{
        
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'secondary.main',
        color: 'text.secondary',
        justifyContent:"space-around",
        '& svg': {
          m: 1,
        },
      }}
    >
      {/* <FormatBoldIcon /> */}

      <Box width={130}>

      <Box sx={{textAlign:"center"}}>

      <Typography variant="h6" fontSize={"small"} fontWeight={"bold"} color="white" mx={2}>
   4-5 Yrs
     </Typography>
 
      </Box>
     <Box sx={{textAlign:"center"}} color={"white"}>


     <Typography variant="p" fontSize={11}>
    age
     </Typography>
     </Box>
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />

      <Box width={130}>

<Box sx={{textAlign:"center"}}>

<Typography variant="h6" fontSize={"small"} fontWeight={"bold"} color="white" mx={3}>
3 days
</Typography>

</Box>
<Box sx={{textAlign:"center"}} color={"white"}>


<Typography variant="p" fontSize={11}>
weekly
</Typography>
</Box>
</Box>






<Divider orientation="vertical" variant="middle" flexItem />






<Box width={130}>

<Box sx={{textAlign:"center"}}>

<Typography variant="h6" fontSize={"small"} fontWeight={"bold"} color="white" mx={2}>
3.30 hrs
</Typography>

</Box>
<Box sx={{textAlign:"center"}} color={"white"}>


<Typography variant="p" fontSize={11}>
period
</Typography>
</Box>
</Box>


      {/* <FormatItalicIcon /> */}
    </Box>
    </Card>
  </Grid>
 


  <Grid item xs={3}>

<Card sx={{ maxWidth: 305, borderRadius:5}}  >
    <CardMedia
      sx={{marginX:3, height: 200,objectFit:"contain",marginTop:3 }}
     
      image={card3}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      Pre-Nursery
      </Typography>
      <Typography variant="body2" color="text.secondary">
      EduKid is thrilled to teach pre-nursery courses to better the lives of our children.
      </Typography>
    </CardContent>
    <Box
    mx={5}
    my={2}
    py={1}
    sx={{
      
      display: 'flex',
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: 2,
      bgcolor: 'tertiary.main',
      color: 'text.secondary',
      justifyContent:"space-around",
      '& svg': {
        m: 1,
      },
    }}
  >
    {/* <FormatBoldIcon /> */}

    <Box width={130}>

    <Box sx={{textAlign:"center"}}>

    <Typography variant="h6" fontSize={"small"} fontWeight={"bold"} color="white" mx={2}>
 4-5 Yrs
   </Typography>

    </Box>
   <Box sx={{textAlign:"center"}} color={"white"}>


   <Typography variant="p" fontSize={11}>
  age
   </Typography>
   </Box>
    </Box>
    <Divider orientation="vertical" variant="middle" flexItem />

    <Box width={130}>

<Box sx={{textAlign:"center"}}>

<Typography variant="h6" fontSize={"small"} fontWeight={"bold"} color="white" mx={3}>
3 days
</Typography>

</Box>
<Box sx={{textAlign:"center"}} color={"white"}>


<Typography variant="p" fontSize={11}>
weekly
</Typography>
</Box>
</Box>






<Divider orientation="vertical" variant="middle" flexItem />






<Box width={130}>

<Box sx={{textAlign:"center"}}>

<Typography variant="h6" fontSize={"small"} fontWeight={"bold"} color="white" mx={2}>
3.30 hrs
</Typography>

</Box>
<Box sx={{textAlign:"center"}} color={"white"}>


<Typography variant="p" fontSize={11}>
period
</Typography>
</Box>
</Box>


    {/* <FormatItalicIcon /> */}
  </Box>
  </Card>
</Grid>
</Grid>




</div>


        </Box>
    )
}