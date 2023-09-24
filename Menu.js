import React from "react";
import './App.css'
import { Link } from "react-router-dom";
export function Menu(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand text-light" href="#Home">Shape shift</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav navbarline">
<Link to='/Home' className="linkone"><li class="nav-item "><a class="nav-link active text-light" aria-current="page">Home</a></li></Link>
<Link to='/programs' className="linkone"><li class="nav-item"><a class="nav-link active text-light" href="programs">Programs</a></li></Link>
<Link to='/contact' className="linkone"><li class="nav-item "><a class="nav-link active text-light" href="contact">Contact</a></li></Link>
      </ul>
    </div>
  </div>
</nav>
</>
    );
}