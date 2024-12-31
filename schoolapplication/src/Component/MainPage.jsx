import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import DynamicNavBar from "../BaseComponent/DynamicNavBar";
import "./MainPageStyle.css"
import topkidImage from "../Images/TopImage.png"
import SportCard from "../Images/SportCard.png"

import { amber } from "@mui/material/colors";
import { useRef } from "react";
import OurProgramScreen from "./MainPagesScreen/OurProgramScreen";
import CardProgram from "./MainPagesScreen/CardProgram";
import OurKid from "./MainPagesScreen/OurKid";

export default function MainPage(){
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };


  return(


    <Box>
<DynamicNavBar />

<div className=" backgroundImage">




<Grid container spacing={2} sx={{justifyContent:"center",alignContent:"center",alignItems:"center" ,alignSelf:"center"}}>
  <Grid item xs={5} >


<Typography variant="h6" color="primary" >
      Kindergarten Program
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

<img src={topkidImage} alt="" width={400} />
</Box>
  </Grid>
 
</Grid>




</div>

{/* Our Program Pages */}

<OurProgramScreen/>

{/* Card Pages  */}


<CardProgram/>

{/* our kid */}

<OurKid/>

    </Box>
  )
}