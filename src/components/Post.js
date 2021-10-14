import React from 'react'; 
import './../Post.css';
import heart from './../assets/img/heart.png';

function Post ({ posts }){
    return(
        <div className="card">
           { posts.map(post => (
                <div className="card-body">
                      <img src={post.image}  className="card-img-top"/>
                            <div key={ post.id} className="row col-12">
                                <p className="card-title col-9">{post.createdAt}</p>
                                <p className="card-title col-2">
                                <br></br>
                                <button  className="btn btn-danger btn-sm" type="button">
                                <img align="left" src={heart} width="13" height="15"/> 
                                <i className="bi bi-heart-fill" >{post.likes} K</i>
                                    </button> </p>
                            </div>

                                <p className="card-text fw-bold">@{post.author.username}</p>    
                                <p className="card-text">{post.text}</p>
                                <a className="text-muted text-decoration-none">
                                <img src="https://img.icons8.com/ios/50/000000/comments.png" width="15" height="18"/>
                                <i className="bi -bi-chat-right">Comentarios({post.comments.length})</i> 
                                    </a>    
                                                   
                    </div>  

           ))}
                          <br></br>
        </div>
    )
    
}
export default Post;