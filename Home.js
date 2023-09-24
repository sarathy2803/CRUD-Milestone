import React, { useEffect } from "react";
import './App.css'
import { Link } from "react-router-dom";
import img from './Gym image2.png';
import Typewriter from "typewriter-effect";
import { useSpring, animated } from "react-spring";
import Aos from "aos";
import 'aos/dist/aos.css';

export function Home() {
  useEffect(()=>{
    Aos.init()
  },[])
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 1000,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  }

  function Numbertwo({ nt }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: nt,
      delay: 1000,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((nt) => nt.toFixed(0))}</animated.div>
  }

  function Numberthree({ nf }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: nf,
      delay: 1000,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((nf) => nf.toFixed(0))}</animated.div>
  }

  return (
    <>
      <div className="container-fluid bgColor vh-100">
        <div className="bgColor">
          <div className="row">
            <Link to={'/register'}><a data-aos="fade-up" data-aos-delay="1000" className="btn btn-light button mt-1 fw-bold">JOIN NOW</a></Link><br/><br/>
            <div className="col-lg-8 col-sm-12"> 
              <h1 data-aos="fade-up" className="fw-bolder fs-2 text-light">
                <Typewriter
                  options={{
                    strings: ['SHAPE YOUR', 'IDEAL BODY'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <h1 className="fw-bolder fs-2 text-light">
                <Typewriter
                  options={{
                    strings: ['BEST FITNESS CLUB', 'NO PAIN NO GAIN'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
            <div className="col-lg-4 col-sm-12">
              <img src={img} data-aos="fade-down" data-aos-delay="300"	className="img-fluid" alt="Gym Image"/>
            </div>
          </div>
          <div className="d-flex gap-3">
            <h3 className="fs-3 text-light">
              <div data-aos="fade-right" className="d-flex">+<Number n={140} /></div>
              EXPERT<br/>COACHES
            </h3>
            <h3 className="fs-3 text-light">
              <div data-aos="fade-up-right" className="d-flex">+<Numbertwo nt={600} /></div>
              MEMBERS<br/> JOINED
            </h3>
            <h3 className="fs-3 text-light">
              <div  data-aos="fade-up-right" className="d-flex">+<Numberthree nf={50} /></div>
              FITNESS<br/> PROGRAMS
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
