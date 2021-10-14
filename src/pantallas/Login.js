
import { useEffect, useState } from "react"
import  { login } from "../services/loginService"

function Login(props){
    function consultar(event){
        event.preventDefault()
        login(event.target.username.value, event.target.password.value)
        .then(response => {
            if(response === undefined){
                Swal.fire('Upssss')
            }else{
                console.log('response', response.id)
                localStorage.setItem('id', JSON.stringify(response.id))
                console.log('login_1', JSON.parse(localStorage.getItem('id')))
                props.history.replace("/")
            }
        })
    }
        return(
            <div className="Login container col-12 col-sm-6 d-flex">
                <form onSubmit={consultar}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username </label>
                        <input type="text" className="form-control" name="username" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" name="password"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
           </div>
        )
    }
   

export default Login;