import React from "react";
import createABike from "../../Assets/Business Solution/create a bike.jpg";
import department from "../../Assets/Business Solution/department.png";
import buyers from "../../Assets/Business Solution/buyers.png";
import manufacturer from "../../Assets/Business Solution/manufacturer.png";

const BusinessSolutions = () => {
  return (
    <div className="mt-32">
      <div className="pt-16 pb-16 w-11/12 mx-auto">
        <div className="grid xl:grid-cols-2 2xl:grid-cols-2 lg:grid-cols-2 ">
          <img
            src={createABike}
            alt=""
            className="xl:w-full 2xl:w-full lg:w-full md:w-full w-36 mx-auto my-auto"
          />
          <div className="xl:pl-32 2xl:pl-32 lg:pl-32 md:pl-32">
            <h1 className="text-4xl font-bold mt-5 xl:mt-0 2xl:mt-0 lg:mt-0 md:mt-0">
              <span className="text-primary">Solutions </span>For Your Business
              <span className="divider bg-primary h-[3px] w-1/2 mx-auto xl:mt-5 2xl:mt-12 lg:mt-8 mt-4"></span>
            </h1>
            <p className="py-6">
              Meet the flexible, open parts platform that is designed to
              eliminate friction and ignite growth in your business.
            </p>
            <div>
              <div className="border-2 p-5 xl:flex 2xl:flex lg:flex md:flex shadow-lg rounded-2xl w-full h-96 xl:h-48 lg:48 2xl:h-64 md:h-48 mb-5 ">
                <div>
                  <img
                    className="xl:w-96 xl:py-10 2xl:w-72 lg:w-72 md:w-72 w-28 pr-10 mx-auto mb-5"
                    src={department}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-natural text-3xl xl:text-2xl font-sans">
                    Wholesale{" "}
                    <span className="text-primary text-3xl xl:text-2xl font-sans">
                      Buyers
                    </span>
                  </h1>
                  <p className="text-warning">
                    Modernize parts sourcing to reduce the time spent
                    negotiating rates, managing suppliers, and finding parts.
                  </p>
                  <button className="py-2 rounded-xl btn-outline border-0 text-white bg-[#24B7BD] hover:border-[#24B7BD] hover:border-2 hover:text-[#24B7BD] hover:bg-white mt-5 px-10">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="border-2 p-5 xl:flex 2xl:flex lg:flex md:flex shadow-lg rounded-2xl w-full h-96 xl:h-48 lg:48 2xl:h-64 md:h-48">
                <div>
                  <img
                    className="xl:w-96 xl:py-10 2xl:w-72 lg:w-72 md:w-72 w-36 pr-10 mx-auto mb-5"
                    src={buyers}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-natural text-3xl xl:text-2xl font-sans">
                    Parts{" "}
                    <span className="text-primary text-3xl xl:text-2xl font-sans">
                      Departments
                    </span>
                  </h1>
                  <p className="text-warning">
                    Launch a modern parts program that delivers revenue, brand
                    loyalty, and department efficiencies.
                  </p>
                  <button className="py-2 rounded-xl btn-outline border-0 text-white bg-[#24B7BD] hover:border-[#24B7BD] hover:border-2 hover:text-[#24B7BD] hover:bg-white mt-5 px-10">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="border-2 p-5 xl:flex 2xl:flex lg:flex md:flex shadow-lg rounded-2xl w-full h-96 xl:h-48 lg:48 2xl:h-64 md:h-48 mt-5">
                <div>
                  <img
                    className="xl:w-96 xl:py-10 2xl:w-72 lg:w-72 md:w-72 w-36 pr-10 mx-auto mb-5"
                    src={manufacturer}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-natural text-3xl xl:text-2xl font-sans">
                    Motor Bike{" "}
                    <span className="text-primary text-3xl xl:text-2xl font-sans">
                      Manufacturers
                    </span>
                  </h1>
                  <p className="text-warning">
                    Create a branded-parts program that drives dealer adoption
                    and a superior customer experience.
                  </p>
                  <button className="py-2 rounded-xl btn-outline border-0 text-white bg-[#24B7BD] hover:border-[#24B7BD] hover:border-2 hover:text-[#24B7BD] hover:bg-white mt-5 px-10">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BusinessSolutions;
