import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Screen/LoginPage";
import SignupPage from "../Screen/SignUpPage";
import HomePage from "../Screen/HomePage";
import StudentLogin from "../Screen/SdutentLogin";
import MainPage from "../Screen/MainPage";
import TestPage from "../TestScreen/Testpage";
import ShowResult from "../TestScreen/ShowResult";

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


<Route path="/test" element={<TestPage/>}/>

    <Route path="/Sigup" element={<SignupPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/result" element={<ShowResult/>}/>
    
    <Route path="/" element={<HomePage/>}/>
    <Route path="/studentlogin" element={<StudentLogin/>}/>
    <Route path="/Main/*" element={<MainPage/>}/>
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