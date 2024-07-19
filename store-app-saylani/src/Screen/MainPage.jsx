import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ShowStudent from './MainPages/ShowStudent';
import Announcement from './MainPages/Announcement';
import StudentCreate from './MainPages/StudentSubmit';

const MainComponent = () => {
  let navigate = useNavigate();

  const goToShowStudent = () => {
    navigate('/Main/ShowStudents');
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '13%', backgroundColor: 'lightblue', height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column',paddingTop:20 }}>

<div style={{width:85,height:85,backgroundColor:"gray",alignSelf:"center" , borderRadius:54}}>

</div>


 <div style={{ cursor: 'pointer',paddingTop:40}} onClick={()=>{navigate('/Main/ShowStudents')}}>
<p>
    StudentList 
</p>
    </div>    

<div style={{borderWidth:1,borderColor:"black",borderStyle:"solid"}}>

</div>
<div style={{ cursor: 'pointer',}} onClick={()=>{navigate('/Main/Announcement')}}>

<p >
    Announcement 
</p>
</div>
<div style={{borderWidth:1,borderColor:"black",borderStyle:"solid"}}>

</div>
<div style={{ cursor: 'pointer',}} onClick={()=>{navigate('/Main/createStudent')}}>

<p>
    Studet Submit 
</p>
</div>
<div style={{borderWidth:1,borderColor:"black",borderStyle:"solid"}}>

</div>
<p>
  Profile
</p>


      </div>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/ShowStudents" element={<ShowStudent />} />
          <Route path="/Announcement" element={<Announcement />} />
          <Route path="/createStudent" element={<StudentCreate />} />
          
          {/* Define other nested routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default MainComponent;
