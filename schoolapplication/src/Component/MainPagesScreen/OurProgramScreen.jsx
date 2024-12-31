
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { useRef } from "react";
import SportCard from "../../Images/SportCard.png"
import OurProgram from "../../Images/OurProgram.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { amber, teal } from "@mui/material/colors";
export default function OurProgramScreen(){


    const containerRef = useRef(null);

    const handleScrollLeft = () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      }
    };
  

    return(
<Box>

<Grid container spacing={2} sx={{justifyContent:"center"}}>
<Grid item xs={12} sx={{textAlign:"center"}}>
<Typography variant="h5" >
     Our Programs
      </Typography>
</Grid>
 <Grid item xs={5} sx={{textAlign:"center"}}>
      <Typography variant="p" >
      Our multi-level kindergarten cater to the age groups 2-5 years with a curriculum focussing children.
      </Typography>
</Grid>
</Grid>

      <Grid container spacing={2} sx={{overflow:"scroll",flexWrap:"nowrap",width:"80%",scrollbarWidth:"none"}}>
  <Grid item xs={4}>
    
  <Paper elevation={0}  


  sx={{borderColor:"secondary.main",width:320,py:4,borderStyle:"double",borderRadius:10}}>
    <Box sx={{}}>
<Box sx={{display:"flex",justifyContent:"center"}}>

<img src={SportCard} alt="sport" width={100}/>
</Box>
    
    <Box sx={{textAlign:"center"}} >

    <Typography variant="h5" py={3}>
     Sport Class </Typography>

<Box mx={3} mb={3}>


     <Typography variant="p" >
    Each day at EduKid is a celebration. We celebrate all sports! 
     </Typography>
</Box>

     <Button variant="outlined" color="secondary"sx={{color:"black",borderRadius:20}} >View Details</Button>
    </Box>
    </Box>
</Paper>
  </Grid>
  <Grid item xs={4}>

    
  <Paper elevation={0}  


sx={{borderColor:"secondary.main",width:320,py:4,borderStyle:"double",borderRadius:10}}>
  <Box sx={{}}>
<Box sx={{display:"flex",justifyContent:"center"}}>

<img src={SportCard} alt="sport" width={100}/>
</Box>
  
  <Box sx={{textAlign:"center"}} >

  <Typography variant="h5" py={3}>
   Sport Class </Typography>

<Box mx={3} mb={3}>


   <Typography variant="p" >
  Each day at EduKid is a celebration. We celebrate all sports! 
   </Typography>
</Box>

   <Button variant="outlined" color="secondary"sx={{color:"black",borderRadius:20}} >View Details</Button>
  </Box>
  </Box>
</Paper>
    
    
      </Grid>
  <Grid item xs={4}>
 
  <Paper elevation={0}  


  sx={{borderColor:"secondary.main",width:320,py:4,borderStyle:"double",borderRadius:10}}>
    <Box sx={{}}>
<Box sx={{display:"flex",justifyContent:"center"}}>

<img src={SportCard} alt="sport" width={100}/>
</Box>
    
    <Box sx={{textAlign:"center"}} >

    <Typography variant="h5" py={3}>
     Sport Class </Typography>

<Box mx={3} mb={3}>


     <Typography variant="p" >
    Each day at EduKid is a celebration. We celebrate all sports! 
     </Typography>
</Box>

     <Button variant="outlined" color="secondary"sx={{color:"black",borderRadius:20}} >View Details</Button>
    </Box>
    </Box>
</Paper>



  </Grid>
  <Grid item xs={8}>



  <Paper elevation={0}  


  sx={{borderColor:"secondary.main",width:320,py:4,borderStyle:"double",borderRadius:10}}>
    <Box sx={{}}>
<Box sx={{display:"flex",justifyContent:"center"}}>

<img src={SportCard} alt="sport" width={100}/>
</Box>
    
    <Box sx={{textAlign:"center"}} >

    <Typography variant="h5" py={3}>
     Sport Class </Typography>

<Box mx={3} mb={3}>


     <Typography variant="p" >
    Each day at EduKid is a celebration. We celebrate all sports! 
     </Typography>
</Box>

     <Button variant="outlined" color="secondary"sx={{color:"black",borderRadius:20}} >View Details</Button>
    </Box>
    </Box>
</Paper>


  </Grid>
</Grid>






<Box my={5} py={5}>


<Grid container spacing={5}>
        <Grid item xs={6}>
  <img src={OurProgram} alt="OUR PROGRAM" style={{ width: '100%', height: 'auto', objectFit: 'cover'}}/>
        </Grid>
        <Grid item xs={6} >
    


<Typography variant="h6" fontWeight={"bold"}>
     Our Programs
      </Typography>
      <Typography variant="p" >
      Being brave isn’t always a grand gesture sometimes it just means having a go attempting that difficult question, offering an answer in a lesson when you’re simply really trying new.
      </Typography>

      <Box
      m={5}
      py={2}
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

      <Typography variant="h5" color="white" >
   14+
     </Typography>
 
      </Box>
     <Box sx={{textAlign:"center"}} color={"white"}>


     <Typography variant="p" >
     Years of experience 
     </Typography>
     </Box>
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />

      <Box width={130}>

<Box sx={{textAlign:"center"}}>

<Typography variant="h5" color="white" >
14+
</Typography>

</Box>
<Box textAlign={"center"}>


<Typography variant="p" color="white" >
Students each year
</Typography>
</Box>
</Box>






<Divider orientation="vertical" variant="middle" flexItem />






<Box width={100}>

<Box sx={{textAlign:"center"}}>

<Typography variant="h5" color="white" >
14+
</Typography>

</Box>
<Box textAlign={"center"}>


<Typography variant="p" color="white">
Award winning
</Typography>
</Box>
</Box>


      {/* <FormatItalicIcon /> */}
    </Box>
<Box pt={2} display={"flex"} >
  <Box borderRadius={35} width={25} height={25} alignContent={"center"} alignItems={"center"} display={"flex"} justifyContent={"center"} bgcolor={teal["A100"]} color={"primary.main"}>
<ArrowForwardIosIcon sx={{fontSize:11}}/>

  </Box>
<Box sx={{display:"flex",alignContent:"baseline",alignItems:"end"}} ml={1}>

  <Typography variant="p">
  We believe every child is intelligent so we care.
</Typography>
</Box>
     
</Box>


<Box pt={2} display={"flex"} >
  <Box borderRadius={35} width={25} height={25} alignContent={"center"} alignItems={"center"} display={"flex"} justifyContent={"center"} bgcolor={teal["A100"]} color={"primary.main"}>
<ArrowForwardIosIcon sx={{fontSize:11}}/>

  </Box>
<Box sx={{display:"flex",alignContent:"baseline",alignItems:"end"}} ml={1}>

  <Typography variant="p">
  Teachers make a difference of your child. 
</Typography>
</Box>
     
</Box>
        </Grid>
    
      </Grid>


      




</Box>


</Box>
    )
}