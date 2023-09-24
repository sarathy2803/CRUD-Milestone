import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'
import Aos from "aos";
export function Contact(){
    useEffect(()=>{
        Aos.init();
    },[])

    return(
        <>
        <div className="bg-dark vh-100">
        <h1 data-aos="fade-up-left"  className="fs-1 fw-bolder text-light">READY TO <span className="text-warning">LEVEL UP</span><br/><span className="text-warning">YOUR BODY </span><h1 className="fs-1 fw-bolder text-light">WITH US ?</h1></h1>
        <Link to={'/register'} data-aos="fade-up-right" className="btn btn-warning text-dark fw-bold ms-5 mt-1">Join Now</Link>
        </div><hr/>
        </>
    );
}