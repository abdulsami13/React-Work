import { Box ,Button,Grid,Paper,TextField, Typography } from "@mui/material";

export default function Login(){



    return(
        <Box sx={{display:"flex", justifyContent:"center",pt:5}}>

<Paper elevation={3}  sx={{width:1/2,height:450,alignContent:"center",alignSelf:"center",textAlign:"center"}}>
<Typography variant="h5" gutterBottom>
        Login
      </Typography>
<Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
<Grid item xs={8}>
    

<TextField id="filled-basic" label="Name" variant="filled" fullWidth />
</Grid>

<Grid item xs={8}>
    

<TextField id="filled-basic" label="Email" variant="filled" fullWidth/>
</Grid>


<Grid item xs={8}>
    

<TextField id="filled-basic" label="Password" variant="filled" fullWidth/>
</Grid>
<Grid item xs={8}>

<Button variant="contained">Create</Button>
</Grid>

</Grid>

</Paper>
        </Box>



    )
}