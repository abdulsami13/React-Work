

import { useEffect, useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/AddUser"
import { useUserStore } from "../../../lib/userStore"
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../../../lib/FirebaseSetUp"
import { useChatStore } from "../../../lib/chatStore"
export default function ChatList() {

    const [chats, setChats] = useState([])
    const [addMode, setAddMode] = useState(false)
    const [input, setInput] = useState("")
    
const { currentUser} = useUserStore()
const { changeChat} = useChatStore() 


useEffect(() => {
    
    const unsub = onSnapshot(doc(db,"userchats",currentUser.id), async(res)=>{
const item = res.data().chats


const promises = item.map(async (item)=>{
    const userDocRef = doc(db,"users",item.receiverId);
    const userDocsnap = await getDoc(userDocRef)

    const user = userDocsnap.data()


    return{...item,user}
})

const chatData = await Promise.all(promises)

setChats(chatData.sort((a,b)=>b.updatedAt - a.updatedAt) )

    })
    return () => {
        unsub()
    };
}, [currentUser.id]);


const handelSelect= async(chat)=>{

const userChats = chats.map(item=>{
    const {user,...res}=item;
    return res;
})

const chatIndex = userChats.findIndex(item=> item.chatId=== chat.chatId)
userChats[chatIndex].isSeen = true

const userChatsRef = doc(db,"userchats",currentUser.id)
try{
await updateDoc(userChatsRef,{
    chats:userChats,

})

changeChat(chat.chatId,chat.user)
}catch(e){
    console.log(e)
}

}

console.log(chats)
const filteredChats = chats.filter((c)=>c.user.username.toLowerCase().includes(input.toLowerCase()))

    return (
        <div className="chatList">

            <div className="search">
                <div className="searchBar">
                    <img src="Image/search.png" alt="" />
                    <input type="text" placeholder="Search" onChange={(e)=>setInput(e.target.value)} />
                </div>
                <img src={addMode ? "/Image/minus.png" : "Image/plus.png"} alt="" className="add" onClick={() => setAddMode((pre) => !pre)} />

            </div>
            {/* message  */}
            {/* <div className="item">

                <img src="Image/avatar.png" alt="user" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Helloe</p>
                </div>
            </div> */}

{filteredChats.map((chat)=>{

    return(

        <div className="item" key={chat.chatId} onClick={()=>handelSelect(chat)} 
        style={{backgroundColor:chat.isSeen?"transparent":"#5183fe"}}>

                <img src={chat.user.blocked.includes(currentUser.id)?"Image/avatar.png":chat.user.avatar||"Image/avatar.png"} alt="user" />
                <div className="texts">
                    <span>{chat.user.blocked.includes(currentUser.id)?"User":chat.user.username}</span>
                    <p>{chat.lastMessage}</p>
                </div>
            </div>
            )

})

}

{addMode?<AddUser/>:<></>}
        </div>
    )
}