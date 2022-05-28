import React from "react";

const AboutMe = () => {
  return (
    <div>
      <h1 className="text-center xl:pt-16 lg:xl:pt-16 md:xl:pt-16 mt-5 w-full my-auto uppercase text-4xl">
        <span className="text-natural">About</span>{" "}
        <span className="text-primary">Me</span>
        <div className="divider"></div>
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
        <div className="w-11/12 mx-auto my-auto mb-16">
          <div className="">
            <h3 className="text-xl">
              Name : <span className="text-primary">Muhammad Asif</span>
            </h3>
            <h3 className="text-xl pt-4">
              Age : <span className="text-primary">16</span>
            </h3>
            <h3 className="text-xl pt-4">
              Qualification : <span className="text-primary">WEB_DEV</span>
            </h3>
            <h3 className="text-xl pt-4">
              Post : <span className="text-primary">Front End Developer</span>
            </h3>
            <h3 className="text-xl pt-4">
              Language : <span className="text-primary">Bengali</span>
            </h3>
            <button className="btn hover:border-primary  px-5 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white mt-5">
              <span className="pr-5">Download CV </span>
              <i className="fa fa-download" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="mx-auto my-auto grid grid-cols-2 xl:gap-5 lg:gap-5 md:gap-5 gap-3 max-w-xl max-h-xl pr-5">
          <div className="shadow-sm xl:p-10 md:p-10 lg:p-10 p-3 text-3xl bg-slate-100">
            <h1 className="text-4xl text-warning text-center">2+</h1>
            <p className="text-xl pt-3 text-center">
              Years Of <span className="text-primary">Experience</span>
            </p>
          </div>
          <div className="shadow-sm xl:p-10 md:p-10 lg:p-10 p-3 text-3xl bg-slate-100">
            <h1 className="text-4xl text-warning text-center">100+</h1>
            <h1 className="text-xl pt-3 text-center">
              Project <span className="text-primary">Completed</span>
            </h1>
          </div>
          <div className="shadow-sm xl:p-10 md:p-10 lg:p-10 p-3 text-3xl bg-slate-100">
            <h1 className="text-4xl text-warning text-center">430+</h1>
            <h1 className="text-xl pt-3 text-center">
              Happy <span className="text-primary"> Clients</span>
            </h1>
          </div>
          <div className="shadow-sm xl:p-10 md:p-10 lg:p-10 p-3 text-3xl bg-slate-100">
            <h1 className="text-4xl text-warning text-center">12+</h1>
            <h1 className="text-xl pt-3 text-center">
              Awards
              <span className="text-primary"> Won</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
