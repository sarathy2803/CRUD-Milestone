import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Update(){
    var { id } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobil_number, setMobil_number] = useState('')

    useEffect(() => {
        fetch('http://localhost:3003/getsingle/'+id)
            .then(res => res.json())
            .then((data) => {
                setName(data[0].name)
                setEmail(data[0].email)
                setMobil_number(data[0].mobil_number)
            })
    },[])
    function handlesubmit(event){
        event.preventDefault()
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var mobil_number=document.getElementById("number").value
    var key={
        name:name,
        email:email,
        mobil_number:mobil_number
    }
    if(name===''){
        alert("enter the  name")
    }
    else if(email===''){
        alert("enter the email")
    }
    else if(mobil_number===''){
        alert("enter the number")
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
         <div className="bg-dark">
        <h1 className="text-light">Register Form</h1>
            <form onSubmit={handlesubmit}>
                <table className="text-center text-light">
        <tr>
        <td><label>Name</label></td>
        <td><input type="text" onChange={(set)=>setName(set.target.value)}  id="name" required value={name}></input></td>
        </tr>
        <tr>
        <td><label>Email</label></td>
        <td><input type="text"  onChange={(set)=>setEmail(set.target.value)} id="email"  required value={email}></input></td>
        </tr>
        <tr>
        <td><label>Phone Number</label></td>
        <td><input type="tel" onChange={(set)=>setMobil_number(set.target.value)}   id="number" value={mobil_number}></input></td>
        </tr>
        <tr><td><button type="submit" className="text-center btn btn-primary">Submit</button></td></tr>
                </table>
            </form>
        </div>
        </>
    );
}