import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Screen/MainPage";






function Routers(){

    return(

<BrowserRouter>
<Routes>


<Route path="/Admin/*" element={<MainPage/>}/>

{/* <Route path="/Login" element={<Login/>}/>

<Route path="/Result" element={<ShowResult/>}/>

<Route path="/Admin/*" element={<AdminMainScreen/>}/>
<Route path="/StudentProgress" element={<StudentProgress/>}/> */}


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