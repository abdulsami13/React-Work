import { useEffect } from "react";
import Chat from "./Component/chat/Chat";
import Detail from "./Component/detail/Detail";
import List from "./Component/list/List";
import Login from "./Component/login/Login"
import Notification from "./Component/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/FirebaseSetUp";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

export default function App(){

const {currentUser,isLoading,fetchUserInfo} = useUserStore()
const {chatId} = useChatStore()

useEffect(() => {
  const unSub= onAuthStateChanged(auth,(user)=>{
    fetchUserInfo(user?.uid)
  })
  return () => unSub()  // cleanup function when component unmounts
}, [fetchUserInfo])

console.log(currentUser) //

if(isLoading) return <div className="Loading">Loading...</div>


  return(
    <div className="container">
     
     {
       currentUser?(
        <>

          
         <List/>
         {chatId&&

           <Chat/>
         }
         {chatId &&

           <Detail/>
         }
        </>
       ):(<Login/>)

     }
     <Notification/> 
      </div>

  )
}