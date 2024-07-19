import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBullseye } from 'react-icons/fa';

export default function Announcement() {


const [getAnnouncementValue, setgetAnnouncementValue] = useState([])
const [showcreate, setshowcreate] = useState(false)
const [getValue, setgetValue] = useState("")



const getAnnouncement = ()=>{


  axios.get('https://attendencebackend.vercel.app/alert/getallannouncement')
  .then(function (response) {
    // handle success
    console.log(response.data.announcement);

    setgetAnnouncementValue(response.data.announcement)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


}


const createAnnouncement = ()=>{


  axios.post('https://attendencebackend.vercel.app/alert/announcement', {
    announcement:getValue
  })
  .then(function (response) {
    console.log(response.data);
    setshowcreate(false)
    getAnnouncement()

  })
  .catch(function (error) {
    console.log(error.message);
  });



}


useEffect(() => {
  getAnnouncement()
}, [])



  return (
    <div>
      <div style={{ width: '100%', height: '10%',backgroundColor:"#24aaa3",display:"flex",justifyContent:"space-between" }}>
        <img
          src="https://cwcreative.com/assets/image-cache/blog/Eye_catching_ways_to_make_announcements.2aee7ba1.jpg"
          alt="Announcement Image"
          style={{ width: '30%', height: '100%', objectFit: 'contain' }}
        />
<div style={{alignSelf:"end",paddingBottom:40,paddingRight:30}}>

        <button onClick={()=>setshowcreate(true)} >Create </button>
</div>
      </div>



      <div>


        {
          getAnnouncementValue?
          getAnnouncementValue.map((item,index)=>{


            return(
              <div>

                <p style={{textAlign:"center"}}>
                 {item.announcement}
                </p>

              </div>
            )
          })

          :
          <p style={{textAlign:"center"}}>
                   No Announcement 
                </p>

        }

      </div>



{/*  create announcement/ */}

{showcreate ?
  

      <div style={{position:"absolute",backgroundColor:"rgba(211, 211, 211, 0.8)",width:"100%",height:"100%",top:0,}}>
<div style={{display:"flex"}}>

<div style={{backgroundColor:"gray", width:45,height:45,borderRadius:30,textAlign:'center',cursor:"pointer"}} onClick={()=>setshowcreate(false)} >
<p style={{fontSize:18}}>x</p>

</div>
</div>
<div style={{}}>

<div style={{paddingTop:150}}>
<input type="text" 
                                                placeholder="Enter ANNOUNCEMENT"
                                                value={getValue}
                                                onChange={(e) => setgetValue(e.target.value)}
                                                required
                                                
                                                
                                                
                                                style={{width:"60%",alignSelf:"center"}}            />
<button style={{width:"10%" ,marginLeft:"50%"}} onClick={createAnnouncement}>Submit</button>
</div>



</div>


      </div>

: null
}
    </div>
  );
}
