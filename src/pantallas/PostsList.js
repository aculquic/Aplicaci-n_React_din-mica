import { useEffect, useState } from "react"
import { getPosts } from "../services/loginService"
import  Post  from "../components/Post"

function Postlist () {
 const [posts, setPosts] = useState([])
 
 useEffect(() => {
    getPosts()
    .then(posts => {
        setPosts(posts)
    })
    .catch((err) => {
       if (error?.response.status === 401){
            Swal.fire(err)
        }
   })
},[])

    return (
        <div className="Postlist container me-2 row mt-3" style={{textAlign:"justify",marginTop:"10%",fontSize:"2.5rem"}}>
                {posts.length ? <Post posts={posts}/> : 'Loading.....'}      
        </div>

             )
 }

export default Postlist