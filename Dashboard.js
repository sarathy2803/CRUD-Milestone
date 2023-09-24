import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Dashboard(){
    var {id}=useParams()
    const[name,setName]=useState('')
    useEffect(()=>{
        fetch(`http://localhost:3003/getsingle/`+id)
        .then(res=>res.json())
        .then((output)=>{
            setName(output[0].name)
        })
    })
     return(
        <>
        <div className="text-center">
        <h1>Welcomes You,{name}</h1>
        <div class="image-fluid w-50">
       <img src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top " alt="Image"/>
       <div class="card-body">
       <h5 class="card-title fs-1">Diet Plan</h5>
       <p class="card-text fs-3">Morning : Veggies<br/>Lunch : Fruits<br/>Dinner : Chapati</p>
       </div>
      </div>
        </div>
        </>
    );
   
}