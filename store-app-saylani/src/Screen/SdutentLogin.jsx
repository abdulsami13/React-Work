import React, { useState } from 'react';
// import axios, { formToJSON } from 'axios';
import { FaBeer } from "react-icons/fa";

import emailvalue from "../img/Emailicon.png"
import passwordvalue from "../img/Password icon.png"

import '../App.css';





const StudentLogin = () => {
    const [fullname, setFullname] = useState("")
    const [contact, setContact] = useState("")
    const [RollNo, setRollNo] = useState("")
    const [Classbelong, setClass] = useState("")


    // style kesy krty inline ?
    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:5000/api/signin', {
        //         RollNo,
        //         Classbelong,
        //     });
        //     console.log("signup")  
        // } catch (error) {
        //     console.log(error)
        // }
    };
    return (
        <div  style={{ fontFamily: "Arial",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            height: "100vh",
            margin: 0,}}>
            <div className='outerPart'>

                <div style={{ justifyContent: "space-evenly", display: "flex", marginTop: 30 }}>


                    <div ><h1 className='saylaniheader'>SAYLANI </h1>
                        <h3 style={{ margin: 0, color: "blue", textAlign: "center" }}>ONLINE STUDENT CLASS</h3>

                        <div>
                            <form>
                                <form onSubmit={handleSubmit}>


                                    <div style={{ borderBottomColor: 'black', borderBottomStyle: "solid", borderBottomWidth: 1, marginTop: 80, marginBottom: 20 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignSelf: "center" }}>

                                            <input
                                                type="text"
                                                placeholder="Name"
                                                value={fullname}
                                                onChange={(e) => setFullname(e.target.value)}
                                                required
                                                className='inputtext'
                                            />
                                         
                                        </div>
                                    </div>


                                    <div style={{ borderBottomColor: 'black', borderBottomStyle: "solid", borderBottomWidth: 1, marginTop: 20, marginBottom: 20 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignSelf: "center" }}>

                                            <input
                                                type="text"
                                                placeholder="Roll No."
                                                value={RollNo}
                                                onChange={(e) => setRollNo(e.target.value)}
                                                required
                                                className='inputtext'
                                            />
                                         
                                        </div>
                                    </div>



                                    <div style={{ borderBottomColor: 'black', borderBottomStyle: "solid", borderBottomWidth: 1, marginTop: 20, marginBottom: 20 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignSelf: "center" }}>

                                            <input
                                                type="text"
                                                placeholder="Class"
                                                value={Classbelong}
                                                onChange={(e) => setClass(e.target.value)}
                                                required
                                                className='inputtext'
                                            />
                                         
                                        </div>
                                    </div>
                                    {/* <p style={{ color: "blue", marginBottom: 50 }}>Forgot Fassword?</p> */}

                                    <button type="submit">Login</button>
                                </form>
                          
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default StudentLogin