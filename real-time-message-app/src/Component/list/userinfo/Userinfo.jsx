

import { useUserStore } from "../../../lib/userStore"
import "./userinfo.css"
export default function UserInfo(){
    const {currentUser} = useUserStore()

    return(
        <div className="UserInfo">
     
            <div className="user">

            <img src={currentUser.avatar || "./avatar.png"} alt="sdav" />
            <h2>{currentUser.username}</h2>
            </div>

            <div className="icons">
                <img src="./Image/more.png" alt="sd" />
                <img src="./Image/video.png" alt="sd" />
                <img src="./Image/edit.png" alt="sd" />
                
                
            </div>

        </div>
    )
}