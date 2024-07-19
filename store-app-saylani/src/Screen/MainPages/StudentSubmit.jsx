import axios from "axios"
import { useState } from "react"

export default function StudentCreate(){

    const [fullname, setFullname] = useState("")
  
    const [RollNo, setRollNo] = useState("")
    const [Classbelong, setClass] = useState("")


const creatStudent = ()=>{

console.log(fullname,RollNo,Classbelong)


    axios.post('https://attendencebackend.vercel.app/', {
        name: fullname,
        regNo: RollNo,
        grade:Classbelong
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });



}



    return(


        <div>

<h1>
    Enrolling Student 
</h1>


<input      type="text"                         placeholder="Name"
                                                value={fullname}
                                                onChange={(e) => setFullname(e.target.value)}
                                                required  />

<input  type="text"
                                                placeholder="Roll No."
                                                value={RollNo}
                                                onChange={(e) => setRollNo(e.target.value)}
                                                required/>

<input  type="text"
                                                placeholder="Class"
                                                value={Classbelong}
                                                onChange={(e) => setClass(e.target.value)}
                                                required/>

<button style={{width:"25%",marginLeft:30}}   onClick={creatStudent}>
    Submit
</button>

        </div>
    )
} 