import React from 'react';
import { Box, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, AppBar } from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreateQuiz from './CreateQuiz'; // Ensure this component exists
import QuizPage from './QuizPage';

export default function MainPage() {
  const [menuList] = React.useState([
    { name: "Create Quiz", route: "createquiz" },
    { name: "Quiz", route: "quiz" },
    { name: "Color Theme", route: "colortheme" },
    { name: "Activation", route: "activation" },
    { name: "Institute Detail", route: "institutedetail" }
  ]);

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar  sx={{ width: 250, height: "100vh", position: "fixed", left:0}} > 
        <List>
          {menuList.map((item, index) => (
            <ListItem key={item.route} disablePadding>
              <ListItemButton onClick={() => navigate(item.route)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </AppBar >

      <Box sx={{ flexGrow: 1, p: 3, ml: 32 }}>
        <Routes>
          <Route path="/createquiz" element={<CreateQuiz />} />
          <Route path="/quiz" element={<QuizPage />} />
          
          {/* Uncomment and ensure these components exist */}
          {/* <Route path="/allstaff" element={<AllStaff />} />
          <Route path="/colortheme" element={<ColorTheme />} />
          <Route path="/activation" element={<ActivationPayment />} />
          <Route path="/institutedetail" element={<InstituteDetail />} /> */}
        </Routes>
      </Box>
    </Box>
  );
}
