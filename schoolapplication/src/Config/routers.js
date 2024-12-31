import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Component/MainPage";
import AdminMainScreen from "../Component/AdminPages/AdminMainPages";
import StudentProgress from "../Component/UserPages/StudentProgress";
import ShowResult from "../Component/StudentResult";
import Login from "../Component/Login";

// import Hello from "../Screens/User/Home";
// import CarDetail from "../Screens/User/CarDetail";
// import Signup from "../Screens/Signup";
// import BookNow from "../Screens/User/BookNow";

// import Main from "../Screens/Admin/AdminDashboard";
// import Login from "../Screens/Login";
// import ProtectedRoute from "../Screens/User/ProtectedRoute";





function Routers(){

    return(

<BrowserRouter>
<Routes>


<Route path="/" element={<MainPage/>}/>
<Route path="/Login" element={<Login/>}/>

<Route path="/Result" element={<ShowResult/>}/>

<Route path="/Admin/*" element={<AdminMainScreen/>}/>
<Route path="/StudentProgress" element={<StudentProgress/>}/>


    {/* <Route path="/Sigup" element={<SignupPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/result" element={<ShowResult/>}/>
    
    <Route path="/" element={<HomePage/>}/>
    <Route path="/studentlogin" element={<StudentLogin/>}/>
    <Route path="/Main/*" element={<MainPage/>}/> */}
    {/* 
    <Route path="/Login" element={<Login/>}/>
    <Route path='/booknow' element={<ProtectedRoute component={BookNow}/>}/> 
    <Route path='/Admin/*' element={<Main/>}/> 
     */}

    
        
     
</Routes>
</BrowserRouter>


    )
}

export default Routers