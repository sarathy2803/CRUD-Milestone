import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function OwnerDasboard(){
    const[fetchdata,setFetchdata]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3003/getdata")
        .then(datavalue=>datavalue.json())
        .then(extractvalue=>setFetchdata(extractvalue))

    })
    const delt=(id)=>{
        var key ={id:id}
        axios.post("http://localhost:3003/delete",key)
        .then((res)=>{
            if(res.data.status === "error"){
                alert("data are not deleted")
            }
            else if(res.data.status === "success"){
                alert("data are deleted")
            }
        })
    }
    function handlesubmit(event){
        event.preventDefault()
    var name=document.getElementById("uname").value
    var email=document.getElementById("email").value
    var number=document.getElementById("number").value
    var key={
        name:name,
        email:email,
        number:number
    }
    if(name===''){
        alert("enter the first name")
    }
    else if(email===''){
        alert("enter the email")
    }
    else if(number===''){
        alert("enter the  number")
    }
    else{
        axios.put("http://localhost:3003/updatevalues/:id",key)
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
        <table class="table table-bordered table-dark text-warning ">
        <th>Name</th>
        <th>Email</th>
        <th>Mobile Number</th>
        <th>Password</th>
        <th>Roll</th>
        <th>More Details</th>
        {
        fetchdata.map((value,index)=>(
            <>
            <tbody>
                <tr>
                    <td><h4>{value.name}</h4></td>
                    <td><h4>{value.email}</h4></td>
                    <td><h4>{value.mobil_number}</h4></td>
                    <td><h4>{value.password}</h4></td>
                    <td><h4>{value.roll}</h4></td>
                    <td><Link to={`/getsingle/${value.id}`}>View</Link></td>
                    <td><Link to={`/update/${value.id}`}><button className="btn btn-success ms-5 fw-bold">update</button></Link></td> 
                    <td><button className="btn btn-danger fw-bold" onClick={()=>{delt(value.id)}}>Delete</button></td> 
                    </tr>
            </tbody>
            </>
        ))
        }
        </table>
        </>
    );
}