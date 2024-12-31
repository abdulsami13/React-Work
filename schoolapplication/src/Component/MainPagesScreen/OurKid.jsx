import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import ourkid from "../../Images/ourkid.png"

export default function OurKid(){



    return(

        <Box sx={{height:"100vh",alignContent:"center"}}>
      




<Grid container spacing={2} sx={{justifyContent:"center",alignContent:"center",alignItems:"center" ,alignSelf:"center"}}>
  <Grid item xs={5} >


<Typography variant="h5" fontWeight={"bold"} >
Know more about EduKid
      </Typography>
      <Typography variant="h3" >
      Best Childern's Education Curriculum
      </Typography>

      <Typography variant="p" sx={{textDecoration:"underline"}}>
      Admission Open 20-24April
      </Typography>
<Box pt={2}>

      <Button variant="contained" color="secondary"  >Apply Now</Button>
</Box>

  </Grid>
  <Grid item xs={4}>
  <Box>

<img src={ourkid} alt="" width={400} />
</Box>
  </Grid>
 
</Grid>





        </Box>
    )
}