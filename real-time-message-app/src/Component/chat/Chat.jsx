import { useEffect, useRef, useState } from "react";
import "./chat.css"
import EmojiPicker from 'emoji-picker-react';
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../lib/FirebaseSetUp";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/uload";

export default function Chat(){
const [chat,setChat] = useState([])
const [open,setOpen] = useState(false)
const [text,setText] = useState("")
const [img,setImg] = useState({
    file:null,
    url:""
})


const { chatId,user,isCurrentUserBlocked,isReceiverBlocked} = useChatStore() 
const { currentUser} = useUserStore() 


const endRef = useRef(null)

useEffect(()=>{
endRef.current?.scrollIntoView({behavior: "smooth"})
},[])

useEffect(()=>{
const unSub = onSnapshot(doc(db,"chats",chatId),(res)=>{

    setChat(res.data())
    console.log(res.data())
})

return ()=>{
    unSub()
}
},[chatId])
    

console.log(chat)
const handleEmoji=(e)=>{
    console.log(e)
    setText(prev=>prev+e.emoji)
    setOpen(false)
}

const handelImg = (e)=>{
    if(e.target.files[0]){
    
      setImg({
        file:e.target.files[0],
        url:URL.createObjectURL(e.target.files[0])
      })
    }
    
    }
    

const handelSend = async()=>{
    if(text === ""){
return
    }
let imgUrl = null
 

    try{

if(img.file){
    imgUrl = await upload(img.file)
}


        await updateDoc(doc(db,"chats",chatId),{
message:arrayUnion({
    senderId:currentUser.id,
    text,
    createdAt:new Date(),
    ...(imgUrl && {img:imgUrl}),
})
        })


const userIDs =  [ currentUser.id,user.id];

userIDs.forEach(async(id)=>{


    
    const userChatRef = doc(db, "userchats",id)
    const userChatsSnapshot =  await getDoc(userChatRef)
    
    if(userChatsSnapshot.exists()){
        const userChatsData = userChatsSnapshot.data()
        
        const chatIndex = userChatsData.chats.findIndex((c)=> c.chatId = chatId)
        userChatsData.chats[chatIndex].lastMessage = text
        userChatsData.chats[chatIndex].isSeen = id=== currentUser.id ? true:false
        userChatsData.chats[chatIndex].updatedAt = Date.now()
        console.log(userChatsData.chats)
        await updateDoc(userChatRef,{
            chats:userChatsData.chats, 
        })
        
    }
})

    }catch(err){
console.log(err)
    }


    setImg({
        file:null,
        url:""
    })

    setText("")
}
    





    return(
        <div className="chat">
         
         <div className="top">

            <div className="user">
<img src={user?.avatar || "./avatar.png"} alt="" />
<div className="texts">
<span>{user.username}</span>
<p>Lorem ipsum dolor sit amet.</p>
</div>

</div>

            <div className="icons" >
<img src="Image/phone.png" alt="" />
<img src="Image/video.png" alt="" />
<img src="Image/info.png" alt="" />
          
            </div>
         </div>


         <div className="center">


{/* <div className="message own">

<div className="texts ">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque rem mollitia sapiente possimus consequuntur tenetur magnam aliquam reprehenderit et architecto.</p>

<span>1 min ago</span>
</div>
</div> */}

{chat?.message?.map((messages) =>{

return(

    <div className={messages.senderId=== currentUser.id?"message own":"message"} key={messages?.createAt}>

<div className="texts">
    {messages.img &&

<img src={messages.img} alt="" />
    }
    <p>{messages.text}</p>

<span>1 min ago</span>
</div>
</div>
)
})

}

{img.url&&

<div className="message own">
    <div className="texts">
        <img src={img.url} alt="" />
    </div>
</div>
}

<div ref={endRef}>
    
</div>
      
      
      
         </div>


         <div className="bottom">

<div className="icons">
    <label htmlFor="file">

<img src="Image/img.png" alt="" />
    </label>
<input type="file" id="file" style={{display:"none"}} onChange={handelImg} />
<img src="Image/camera.png" alt="" />
<img src="Image/mic.png" alt="" />


</div>
<input type="text" value={text} placeholder={(isCurrentUserBlocked|| isReceiverBlocked)?"You cannot send a message..":"Type a message.." }onChange={e=>setText(e.target.value)} disabled={isCurrentUserBlocked|| isReceiverBlocked}/>
         <div className="emoji">
            <img src="Image/emoji.png" alt="" onClick={()=>setOpen(pre => !pre)}/>
            <div className="picker">

<EmojiPicker  open={open} onEmojiClick={handleEmoji}/> 
            </div>
         </div>
         <button className="sendButton" onClick={handelSend} disabled={isCurrentUserBlocked|| isReceiverBlocked}>Send</button>
         </div>

        </div>
    )
}