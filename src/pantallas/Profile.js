import { useEffect, useState } from "react"
import { getProfile } from "../services/loginService"
import { Link } from "react-router-dom"


function Profile (){
const id = JSON.parse(localStorage.getItem('id'))

const [profiles, setProfiles] = useState([])
useEffect(() => {
        getProfile(id)
       .then(profiles => {
        setProfiles(profiles)
       })
   },[])
        return(
            <div className="card container me-2 row mt-3" style={{textAlign:"center",marginTop:"10%"}}>
                    <div className="card-body">
                        <img src={profiles.avatar}  className="card-img-top"/>
                        <div key={profiles.id} className="row col-12">
                            <p className="card-text fw-bold">@{profiles.username}</p>
                            <p className="card-text fw-bold">{profiles.bio}</p>
                        </div>
                    </div>
                <br></br>
                <div  className="mb-3">
                <Link to="/login">Salir</Link>
               </div>
            </div>

        )
   
 }
 export default Profile;