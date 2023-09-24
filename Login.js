import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
export function Login(){
    function handlelogin(event){
        event.preventDefault()
        var email=document.getElementById("username").value
        var password=document.getElementById("password").value
        var key={
            email:email,
            password:password
        }
        if(email==''){
            alert("Enter the username")
        }
        else if(password==''){
            alert("Enter the password")
        }
        else{
            axios.post("http://localhost:3003/tologinpage",key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("Enter the username or register a new one")
                }
                else if(res.data.status==="success"){
                    var id=res.data.id
                    var roll=res.data.roll
                    alert("Login Successful")
                    if(roll==="owner"){
                    window.location.href=`/ownerdashboard/${id}`
                    }
                    else if(roll==="user"){
                        window.location.href=`/dashboard/${id}`
                    }
                }
                else if(res.data.status="error"){
                    alert("all the data are invalid")
                } 
                else{
                    alert("please register your details first")
                }
            })
        }
    }

    return(
        <>
    <div class="text-light bg-dark vh-100">
        <h1 className="text-center">Login</h1>
        <form  className="text-center" onSubmit={handlelogin} method="POST">
            <div class="form-group"><input type="text" id="username" placeholder="Username" name="username" /></div><br/>
            <div class="form-group"><input type="password" id="password" placeholder="password" name="password" /></div><br/>
           <div class="form-group"><input type="submit" className="btn btn-light rounded fw-bold" value="Login"/></div>
            Doesn't Have an account?<Link className="fw-bolder text-warning" to={'/register'}>Register</Link>
        </form>
    </div>
        </>
    );
}