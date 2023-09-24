import axios from "axios";
import React from "react";
export function Update(){
    function handlesubmit(event){
        event.preventDefault()
    var unmae=document.getElementById("uname").value
    var email=document.getElementById("email").value
    var number=document.getElementById("number").value
    var password=document.getElementById("password").value
    var key={
        unmae:unmae,
        email:email,
        number:number,
        password:password
    }
    if(unmae===''){
        alert("enter the user name")
    }
    else if(email===''){
        alert("enter the email")
    }
    else if(number===''){
        alert("enter the  phone number")
    }
    else if(password===''){
        alert("enter the  password")
    }
    else{
        axios.put("http://localhost:3003/updatevalues/"+id,key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("data are not updated")
            }
            else if(res.data.status==="success"){
                alert("data are updated")
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
                <input type="text" onChange={(set)=>setName(set.target.value)} id="uname" placeholder="Name" name="username" required/>
            </div><br/>
            <div class="form-group">
                <input type="email" onChange={(set)=>setEmail(set.target.value)}id="email"  placeholder="Email" name="email" required/>
            </div><br/>
            <div class="form-group">
                <input type="tel" onChange={(set)=>set(set.target.value)}id="number"  placeholder="Mobile Number" name="number" required/>
            </div><br/>
            <div class="form-group">
                <input type="password" onChange={(set)=>setName(set.target.value)}id="password"  placeholder="Password" name="password" required/>
            </div><br/>
            <div class="form-group">
                <input type="submit" className="btn btn-dark rounded" value="Register"/>
            </div>
        </form> 
    </div>
        </>
    );
}