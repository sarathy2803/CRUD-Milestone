import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'
import Aos from "aos";
export function Programs(){
  useEffect(()=>{
    Aos.init()
  },[])
    return(
        <>
       <div className="bg-dark vh-100">
       <h1 className="fs-1 fw-1 text-light">Programs</h1>
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col-lg-3 col-sm-12">
    <div class="card">
      <img src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-aos="fade-left" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Fat Burning</h5>
        <Link to={'/register'} className="btn btn-dark text-light fw-bold ms-5 mt-1">Join Now </Link>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-sm-12">
    <div class="card">
      <img src="https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-aos="fade-left"class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Strength Training</h5>
        <Link to={'/register'} className="btn btn-dark text-light fw-bold ms-5 mt-1">Join Now</Link>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-sm-12">
    <div class="card">
      <img src="https://images.pexels.com/photos/3822187/pexels-photo-3822187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-aos="fade-left"class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Health Fitness</h5>
        <Link to={'/register'} className="btn btn-dark text-light fw-bold ms-5 mt-1">Join Now</Link>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-sm-12">
    <div class="card">
      <img src="https://images.pexels.com/photos/8544788/pexels-photo-8544788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-aos="fade-left"class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Cardio Training</h5>
        <Link to={'/register'} className="btn btn-dark text-light fw-bold ms-5 mt-1">Join Now</Link>
      </div>
    </div>
  </div>
</div>
       </div>
        </>
    );
}