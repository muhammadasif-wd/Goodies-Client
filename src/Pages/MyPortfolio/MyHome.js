import React from "react";
import { Link } from "react-router-dom";
import portfolio from "../../Assets/portfolio.jpg";

const MyHome = () => {
  return (
    <div>
      <div className="ml-5 mr-5 pt-5">
        <div className="text-center">
          <div className="avatar xl:pt-0 pl-16 pt-3">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-5 ">
              <img src={portfolio} alt="" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl text-center">
          <span className="text-natural">MUHAMMAD</span>{" "}
          <span className="text-primary">ASIF</span>
        </h1>
        <p className="text-xl text-center text-warning">Front End Developer</p>
        <div className="mb-16">
          <div className="drawer-side">
            <label
              htmlFor="dashboard-sidebar"
              className="drawer-overlay"
            ></label>
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-auto">
        <h1 className="text-3xl">
          HI <span className="text-primary font-bold font-mono">!</span>
        </h1>
        <h1 className="xl:text-5xl text-xl mt-2">
          <span className="text-primary pr-3"> I'M</span>
          MUHAMMAD ASIF
        </h1>
        <p className="mt-6">
          I am Asif. I am a talented developer I want to be a full stack
          developer inshallah one day everyone will pray for me. There was no
          previous experience in web development, just learning everything from
          the course. Thanks to the programming hero team. Thanks
        </p>
        <Link to={"/my_portfolio/about_me"}>
          <button className="btn xl:w-1/5 mt-5 px-5 bg-natural xl:rounded-3xl border-white text-nature">
            ABOUT ME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyHome;
