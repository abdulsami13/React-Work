import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
import { auth, db } from "../../lib/FirebaseSetUp"
import { doc, setDoc } from "firebase/firestore"
import upload from "../../lib/uload"




export default function Login(){

const [avatar,setAvatar]= useState({
  file :null,
  url:""
})


const [loading,setLoading] = useState(false)

const handelAvatar = (e)=>{
if(e.target.files[0]){

  setAvatar({
    file:e.target.files[0],
    url:URL.createObjectURL(e.target.files[0])
  })
}

}



const handleLogin = async(e)=>{
e.preventDefault()
setLoading(true)
const formData = new FormData( e.target)
const{email,password} = Object.fromEntries(formData)
try{

  await signInWithEmailAndPassword(auth,email,password)
  
  toast.success("Account Created! You can login now!")
}catch(err){
  console.log(err)
  toast.error(err.message)
}

finally{
  setLoading(false)
}
}


const handleRegister= async(e)=>{
  e.preventDefault()
setLoading(true)
  const formData = new FormData( e.target)
const{username,email,password} = Object.fromEntries(formData)

console.log(username,email,password)


try{


  const res = await createUserWithEmailAndPassword(auth,email,password)

const imgurl = await upload(avatar.file)

await setDoc(doc(db,"users",res.user.uid),{
  username,
  email,
  avatar:imgurl,
  id:res.user.uid,
blocked:[],
})


await setDoc(doc(db,"userchats",res.user.uid),{
chats:[],
})

toast.success("Account Created! You can login now!")

}catch(e){
    console.log(e)
    toast.error(e.message)
  }

  finally{
    setLoading(false)
  }

}


  return(
    <div className="login">
<div className="item">
<h2>welcom back</h2>
<form   onSubmit={handleLogin}>
  <input type="text" placeholder="Email" name="email" />
  <input type="password" placeholder="Password" name="password" />
  <button disabled={loading} type="submit">{loading?"loading..":"Sign In"}</button>
</form>
</div>
<div className="saperator"></div>

<div className="item">


<h2>Create an Account</h2>
<form onSubmit={handleRegister}>
  <label htmlFor="file">
    <img src={avatar.url || "Image/avatar.png" } alt="" />
    Upload an Image</label>
<input type="file" id="file" style={{display:"none"}} onChange={handelAvatar}/>
<input type="text" placeholder="Username" name="username" />
  <input type="text" placeholder="Email" name="email" />
  <input type="password" placeholder="Password" name="password" />
  <button disabled={loading} type="submit">{loading?"Loading.." :"Sign Up"}</button>
</form>
</div>

    </div>
  )  
} 