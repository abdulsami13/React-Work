import React from 'react';
import { CgHello } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

    let navigation = useNavigate()


const StudentLogin = ()=>{

console.log("Hello")
navigation(`/studentlogin`)

}


const adminLogin = ()=>{
    navigation(`/Sigup`)
    console.log("Hello")
    }

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <div style={{ backgroundColor: "#dedafd", display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <p style={{ color: "green" ,fontSize:"large",fontFamily:"monospace",fontWeight:"bold"}}>
          Saylani
        </p>
        <div style={{ display: "flex", gap: "10px" }}>

            
        <select style={{ padding: "5px" ,border:"none" ,background:"none"}}>
            
   
        <option value="" disabled>Portal Login</option>
            <option value="option1" onClick={StudentLogin}>Student Login</option>
            <option value="option2"   onClick={adminLogin}>Admin login</option>
   
          </select>
          <p>
            ABOUT
          </p>
          <p>
            CONTACT
          </p>
        </div>
      </div>
      <div style={{ width: "100%", height: "calc(100vh - 40px)" }}>
        <img
          src="https://cdn.dribbble.com/users/7843013/screenshots/17656044/e-_learning_landing_page1_4x.png"
          alt="mainimage"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
