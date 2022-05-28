import React from "react";
import { Link } from "react-router-dom";
import firstBannerPng from "../../Assets/Banner/1.png";
import secondBannerPng from "../../Assets/Banner/2.png";
import thirdBannerPng from "../../Assets/Banner/3.png";
import forthBannerPng from "../../Assets/Banner/4.png";
function Banner() {
  return (
    <section className="md:mt-32 xl:mt-0 lg:mt-0 2xl:mt-0 mt-24">
      <div className="relative">
        <div className="hero relative">
          <div className=" flex-col">
            <div className="carousel w-11/12 mx-auto xl:pt-32 lg:pt-32">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={secondBannerPng} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={firstBannerPng} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={thirdBannerPng} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src={forthBannerPng} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-5">
              <a href="#slide1" className="btn btn-sm bg-slate-300">
                1
              </a>
              <a href="#slide2" className="btn btn-sm bg-slate-300">
                2
              </a>
              <a href="#slide3" className="btn btn-sm bg-slate-300">
                3
              </a>
              <a href="#slide4" className="btn btn-sm bg-slate-300">
                4
              </a>
            </div>
          </div>
          <div className="justify-center pl-16 lg:pt-36 2xl:pt-72 xl:pt-48 text-white  w-5/6 mx-auto">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="xl:text-xl lg:text-lg md:text-md xl:block lg:block md:block 2xl:block hidden"
            >
              Best Quality
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
              className="xl:text-xl lg:text-2xl text-xs font-bold text-primary xl:block lg:block md:block 2xl:block hidden"
            >
              Professional American Made Automotive Components
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="800"
              className="xl:py-6 lg:py-6 max-w-xl text-xs xl:text-sm lg:text-lg xl:block lg:block md:block 2xl:block hidden"
            >
              Motor Bike Parts Manufacturing Inc. is an internationally
              recognized OEM/Tier 1 supplier specializing in precision metal
              stampings and fine-blanking for the automotive, powertrain, and
              motion technology industries.
            </p>
            <Link to="sign_up">
              <button
                data-aos="zoom-in"
                data-aos-delay="1300"
                className="btn btn-sm btn-primary xl:block lg:block md:block 2xl:block hidden"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
