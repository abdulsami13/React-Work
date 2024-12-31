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
import { Avatar, Box, Button, Checkbox, Divider, Grid, Paper, Step, StepLabel, Stepper, TextField, Tooltip } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CreateCard from "./QuizCreateSubPages/CreateCard";
import CreateQuizPage from "./QuizCreateSubPages/CreateQuizPage";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function CreatEQuiz(props){

  const [Deleteopen, setDeleteOpen] = React.useState(false);


  const [CardData, setCardData] = React.useState({
    Title: '',
    Image: '',
    About: '',
    time:""
  })
  const [quizData, setquizData] = React.useState([])

    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };



  const  CardHandler =(childData)=>{

setCardData(childData)

console.log(CardData)

  }

const QuizHandler = (childData)=>{

  setquizData([...childData])

}

  console.log(CardData)




    return(


        <Box>






    <Box sx={{ width: '100%' }}>
  

<Box sx={{ borderBottom: 1, borderColor: 'divider' ,display:"flex",justifyContent:"center"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={
            <Box style={{display:"flex",alignItems:"center"}}>


            {CardData.length>0?<Avatar sx={{ width: 24, height: 24, bgcolor:"green"}}   ><CheckIcon fontSize="inherit" /></Avatar> 
:<Avatar sx={{ width: 24, height: 24, bgcolor:"#1976d3"}}   >1</Avatar> }

            <Typography variant="p" ml={1} >

            Create Card
            </Typography>


            </Box>
            
            
            }  {...a11yProps(0)} />



          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
 
<CreateCard  sendBackCardData={CardHandler}/>


      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
  <CreateQuizPage sendBackQuizData={QuizHandler}/>
      </CustomTabPanel>


      {/* Page 3 */}
      <CustomTabPanel value={value} index={2}>
       

       <Box>

      
       {CardData.length >0?

      
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
        subheader={CardData.time}
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
 
 :<></>
 
 }


<Divider />

{quizData && quizData.length > 0 ?
        quizData.map((item, index) => (
          <Box key={index}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Tooltip title="Edit" arrow>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete" arrow>
                <IconButton color="primary" aria-label="add to shopping cart" onClick={() => { setDeleteOpen(true) }}>
                  <DeleteIcon color="error" />
                </IconButton >
              </Tooltip>
            </Box>

            <Box sx={{ display: "flex", alignContent: "center", alignItems: "center", alignSelf: "center", textAlign: "center" }}>
              <Box sx={{ border: 1, width: 20, height: 20, textAlign: "center", alignContent: "center", alignItems: "center", alignSelf: "center", borderColor: "#e7e7e7", borderWidth: 1.5, borderRadius: 1 }}>
                <Typography variant="subtitle2" gutterBottom color={"#acacac"}>{index + 1}</Typography>
              </Box>
              <Box sx={{ textAlign: "center", alignContent: "center", alignItems: "center", alignSelf: "center" }}>
                <Typography variant="h6" gutterBottom sx={{ alignContent: "center", alignItems: "center", alignSelf: "center", justifyContent: "center", height: 25 }} ml={1}> {item.question}
                </Typography>
              </Box>
            </Box>

            {item.options.map((option, optIndex) => (
              <Box ml={3} mt={2} mb={1} key={optIndex}>
                <Paper elevation={3} sx={{ backgroundColor: optIndex === item.answer - 1 ? "#8ce68c" : "#dcf4ff", display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} disabled />
                    <Typography variant="body1" gutterBottom sx={{ color: optIndex === item.answer - 1 ? "green" : "#7f8289" }} m={0}>{option}</Typography>
                  </Box>
                  <Box mr={3}>
                    {optIndex === item.answer - 1 ?
                      <Checkbox
                        {...label}
                        checked={true}
                        color="success"
                      /> : <></>
                    }
                  </Box>
                </Paper>
              </Box>
            ))}

            <Box mt={5}></Box>
            <Divider />
          </Box>
        ))
        : <Box></Box>
      }
 </Box>
      </CustomTabPanel>
    </Box>
       </Box>
    )
}