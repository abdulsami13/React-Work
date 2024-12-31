import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { useChatStore } from "../../lib/chatStore"
import { auth, db } from "../../lib/FirebaseSetUp"
import { useUserStore } from "../../lib/userStore"
import "./delete.css"
export default function Detail() {

const {chatId , user,isCurrentUserBlocked,isReceiverBlocked,changeBlock} = useChatStore()

const {currentUser} = useUserStore()
    const handelBlog=async()=>{

        if(!user) return

        const userDocRef = doc(db,"users",currentUser.id)

try{
    
await updateDoc(userDocRef,{
    blocked: isReceiverBlocked?arrayRemove(user.id):arrayUnion(user.id),
})

changeBlock()

}catch(e){

    console.log(e)
}

    }

    return (
        <div className="detail">
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} alt="" />
                <h2>{user?.username}</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">



                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="Image/arrowUp.png" alt="" />

                    </div>
                </div>



                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="Image/arrowUp.png" alt="" />

                    </div>
                </div>




                <div className="option">
                    <div className="title">
                        <span>Share photos</span>
                        <img src="Image/arrowDown.png" alt="" />

                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">




                                <img src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243831-stock-photo-letter-s-logo.jpg" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="Image/download.png" alt="" className="icon" />

                        </div>

                        <div className="photoItem">
                            <div className="photoDetail">




                                <img src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243831-stock-photo-letter-s-logo.jpg" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="Image/download.png" alt="" className="icon" />

                        </div>






                        <div className="photoItem">
                            <div className="photoDetail">




                                <img src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243831-stock-photo-letter-s-logo.jpg" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="Image/download.png" alt="" className="icon" />

                        </div>



                        <div className="photoItem">
                            <div className="photoDetail">




                                <img src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243831-stock-photo-letter-s-logo.jpg" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="Image/download.png" alt="" className="icon" />

                        </div>
                    </div>
                </div>




                <div className="option">
                    <div className="title">
                        <span>Share Files</span>
                        <img src="Image/arrowUp.png" alt="" />

                    </div>
                </div>
            <button onClick={handelBlog}>
                
                {
                    isCurrentUserBlocked?"You are Block": isReceiverBlocked?"User Blocked":"Block User"

                }

                </button>
            <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
            
            </div>
        </div>
    )
}