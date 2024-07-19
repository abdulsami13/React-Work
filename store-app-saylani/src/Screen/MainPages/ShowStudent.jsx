import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowStudent = () => {


const [studentData, setstudentData] = useState([])



console.log(studentData)

  const getStudent = ()=>{


    axios.get('https://attendencebackend.vercel.app/getall')
    .then(function (response) {
      // handle success
      console.log(response.data.students);

      setstudentData(response.data.students)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   



  }


  useEffect(() => {
    getStudent()
  }, [])
  




  return (
    <div >





<div style={{display:"flex",justifyContent:"space-around" ,backgroundColor:"#847ee2"}}>
<p>
  Name 
</p>
<p>Class</p>

<p>Roll No.</p>


</div>

{studentData?   


studentData.map((item,index)=>{

console.log(item)

return(

  <div>

<div style={{display:"flex",justifyContent:"space-around" ,backgroundColor:"white"}}>
<p>
{item.name}
</p>
<p>{item.grade}</p>

<p>{item.regNo}</p>


</div>


  </div>
)

})


:



<>sd</>


}


{/* <div style={{display:"flex",justifyContent:"space-around" ,backgroundColor:"#d5d7f0"}}>
<p>
  Layba 
</p>
<p>XII</p>

<p>39</p>


</div> */}
    </div>
  );
}

export default ShowStudent;
