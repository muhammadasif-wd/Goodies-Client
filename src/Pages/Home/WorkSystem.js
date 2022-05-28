import React from "react";
import computer from "../../Assets/Work System/computer.png";
import nationality from "../../Assets/Work System/nationality.png";
import car from "../../Assets/Work System/car.png";
import simplify from "../../Assets/Work System/SimplifiedOrder.png";

const WorkSystem = () => {
  return (
    <div className="xl:mt-48 lg:mt-36 2xl:mt-48 md:mt-28 mt-16 ">
      <h1 className="xl:text-4xl 2xl:text-6xl lg:text-6xl  text-center text-natural">
        A System Built to <span className="text-primary">Work for You</span>
        <span className="divider bg-primary h-[3px] w-1/4 mx-auto xl:mt-6 2xl:mt-12 lg:mt-8 mt-4"></span>
      </h1>
      <p className="xl:w-1/2 2xl:w-1/2 lg:w-1/2 md:w-1/2 xl:text-[16px] 2xl:text-[21px] lg:text-[21px] md:text-[16px] text-[14px] text-center  mx-auto">
        Stop using fragmented systems, manual processes, and outdated tactics to
        sell and source parts. It’s time to evolve the way you operate in the
        parts space, all from the industry’s leading platform:
      </p>

      <div className="grid xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-2 lg:w-4/5 lg:mx-auto lg:gap-16 md:grid-cols-2 md:w-screen xl:w-11/12  w-4/5 grid-cols-1 mx-auto gap-5 mt-16">
        <div className="card xl:w-96 2xl:w-96 lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              className="xl:w-32 2xl:w-32 lg:w-32 md:w-32 w-16"
              src={computer}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Optimize Wholesale & Local Sales</h2>
            <p>
              Digitize your local parts experience to drive a purchasing
              experience that drives superior performance.
            </p>
          </div>
        </div>
        <div className="card xl:w-96 2xl:w-96 lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              className="xl:w-32 2xl:w-32 lg:w-32 md:w-32 w-16"
              src={nationality}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Grow Nationally</h2>
            <p>
              Our top team members will help ramp your dealer network up to
              speed and get them trained to manage their parts program.
            </p>
          </div>
        </div>
        <div className="card xl:w-96 2xl:w-96 lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              className="xl:w-32 2xl:w-32 lg:w-32 md:w-32 w-16"
              src={car}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Streamline Fulfillment</h2>
            <p>
              Save time by consolidating shipping, order processing, tracking,
              and communications across multiple channels into a single
              platform.
            </p>
          </div>
        </div>
        <div className="card xl:w-96 2xl:w-96 lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl xl:hidden 2xl:block">
          <figure>
            <img
              className="xl:w-32 2xl:w-32 lg:w-32 md:w-32 w-16"
              src={simplify}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Simplify Supplier Management</h2>
            <p>
              Consolidate all buyers into a single platform to reduce time spent
              managing suppliers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSystem;
