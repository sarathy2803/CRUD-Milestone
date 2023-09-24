import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
export function Register(){
    function handlesubmit(event){
        event.preventDefault()
    var name=document.getElementById("uname").value
    var email=document.getElementById("email").value
    var mobile=document.getElementById("number").value
    var password=document.getElementById("password").value
    var roll=document.getElementById("roll").value
    var key={
        name:name,
        email:email,
        mobile:mobile,
        password:password,
        roll:roll
    }
    if(name===''){
        alert("enter the  name")
    }
    else if(email===''){
        alert("enter the email")
    }
    else if(mobile===''){
        alert("enter the  number")
    }
    else if(password===''){
        alert("enter the  password")
    }
    else if(roll===''){
        alert("enter the  owner name")
    }
    else{
        axios.post("http://localhost:3003/register/",key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("Re-enter the details")
                window.location.reload()
            }
            else if(res.data.status==="success"){
                alert("Registered Successfully")
                window.location.href='/login'
            }

        })
    }
    }
    return(
        <>
         <div class=" bg-dark text-light vh-100">
        <h1 className="text-center text-light">Register</h1><br/>
        <form method="POST" onSubmit={handlesubmit} className="text-center">
            <div class="form-group">
                <input type="text"  id="uname" placeholder="Name" name="username" required/>
            </div><br/>
            <div class="form-group">
                <input type="email"  id="email"  placeholder="Email" name="email" required/>
            </div><br/>
            <div class="form-group">
                <input type="tel"  id="number"  placeholder="Mobile Number" name="number" required/>
            </div><br/>
            <div class="form-group">
                <input type="password" id="password"  placeholder="Password" name="password" required/>
            </div><br/>
            <div class="form-group">
                <select id="roll"> 
                <option value="user">User</option>
                </select>
            </div><br/>
            <div class="form-group">
                <input type="submit" className="btn btn-light rounded" value="Register"/>
            </div>
            Already Have an account ?<Link to={'/login'}><a className="fw-bold text-success">Login</a></Link>
        </form>
        
    </div>
        </>
    );
}