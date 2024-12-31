import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Box, Checkbox, Divider, Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";

import CheckIcon from '@mui/icons-material/Check';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const QuizPage = () => {
  const [quizData, setQuizData] = useState( [  
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 4
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        answer: 2
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: 1
    },
    {
        question: "What is the purpose of Promises in JavaScript?",
        options: ["To create new functions.", "To handle synchronous code execution.", "To handle asynchronous operations.", "None of the above"],
        answer: 3
    },
    {
        question: "How do you write an if statement in JavaScript?",
        options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i == 5"],
        answer: 2
    },
    {
        question: "How do you add a single line comment in JavaScript?",
        options: ["<!-- This is a comment -->", "/* This is a comment */", "// This is a comment", "* This is a comment **"],
        answer: 3
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "bg-color", "background-color", "bgcolor"],
        answer: 3
    },
    {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var myVariable;", "let myVariable;", "const myVariable;", "All of the above"],
        answer: 4
    },
    {
        question: "What is the purpose of the alt attribute in an <img> tag?",
        options: ["To provide alternative text for the image.", "To resize the image.", "To link the image to another page.", "To load the image to another page."],
        answer: 1
    },
    {
        question: "How do you call a function named myFunction in JavaScript?",
        options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"],
        answer: 2
    },
]
);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

//   useEffect(() => {
//     axios.get('http://localhost:8000/getquiz')
//       .then(response => {
//         if (response.data && response.data.quizData) {
//           setQuizData(response.data.quizData);
//         } else {
//           console.error("Quiz data not found in response");
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

  const handleCheckboxChange = (questionIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex
    });
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach((question, index) => {
      if (answers[index] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setShowResult(false);
    setAnswers({});
    setScore(0);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {!showResult ? (
        <div>
          {quizData.map((question, questionIndex) => (
            <div key={questionIndex} className="question-container">
              <h3>{questionIndex + 1}. {question.question}</h3>
              <div className="options-container">
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="checkbox"
                      name={`question-${questionIndex}`}
                      checked={answers[questionIndex] === optionIndex + 1}
                      onChange={() => handleCheckboxChange(questionIndex, optionIndex + 1)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="result-container">
          <h2>Your Score: {score} / {quizData.length}</h2>
          <button onClick={resetQuiz}>Try Again</button>
        </div>
      )}


<Box>

<Box sx={{display:"flex" ,alignContent:"center",alignItems:"center",alignSelf:"center",textAlign:"center"}}>

<Box sx={{border:1,width:20,height:20 , textAlign:"center",alignContent:"center",alignItems:"center",alignSelf:"center",borderColor:"#e7e7e7", borderWidth:1.5,borderRadius:1}}>

<Typography variant="subtitle2" gutterBottom color={"#acacac"}>1   </Typography>

</Box>
<Box sx={{textAlign:"center",alignContent:"center",alignItems:"center",alignSelf:"center"}}>
<Typography variant="h6" gutterBottom sx={{alignContent:"center",alignItems:"center",alignSelf:"center",justifyContent:"center",height:25  }}  ml={1}> What is the purpose of the alt attribute in an img tag?

      </Typography>

      </Box>
</Box>
{/* Option */}

<Box ml={3} mt={2} mb={1}>


<Paper elevation={3} sx={{backgroundColor:"#dcf4ff"}}>
<Box sx={{display:"flex" ,alignItems:"center",color:"red"}} >



<Checkbox {...label} disabled />


<Typography variant="body1" gutterBottom sx={{color:"#7f8289" }} m={0}  >To provide alternative text for the image.
      </Typography>
</Box>
</Paper>
</Box>

<Box ml={3} mb={1}>


<Paper elevation={3} sx={{backgroundColor:"#dcf4ff"}}>
<Box sx={{display:"flex" ,alignItems:"center",color:"red"}} >



<Checkbox {...label} disabled />


<Typography variant="body1" gutterBottom sx={{color:"#7f8289" }} m={0}  >To provide alternative text for the image.
      </Typography>
</Box>
</Paper>
</Box>
<Box ml={3} mb={1}>


<Paper elevation={3} sx={{backgroundColor:"#dcf4ff"}}>
<Box sx={{display:"flex" ,alignItems:"center",color:"red"}} >



<Checkbox {...label} disabled />


<Typography variant="body1" gutterBottom sx={{color:"#7f8289" }} m={0}  >To provide alternative text for the image.
      </Typography>
</Box>
</Paper>
</Box>

<Box ml={3} mb={1}>


<Paper elevation={3} sx={{backgroundColor:"#8ce68c",display:"flex",justifyContent:"space-between"}}>
<Box sx={{display:"flex" ,alignItems:"center"}} >



<Checkbox {...label} disabled />


<Typography variant="body1" gutterBottom sx={{color:"green" }} m={0}  >To provide alternative text for the image.
      </Typography>

 

</Box>
<Box mr={3}>

      <Checkbox
  {...label}
  //   icon={<CheckIcon />}   
  // disabled
  checked={true}
  color="success"
  
  
/>
  </Box>
</Paper>
</Box>

</Box>
    </div>
  );
};

export default QuizPage;
