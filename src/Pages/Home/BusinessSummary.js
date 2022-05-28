import finish from "../../Assets/Business img/finish.png";
import computer from "../../Assets/Business img/computer.png";
import women from "../../Assets/Business img/women.png";
import like from "../../Assets/Business img/like.png";

const BusinessSummary = () => {
  return (
    <div className="mb-16">
      <h1 className="uppercase text-2xl xl:text-6xl 2xl:text-6xl lg:text-6xl md:text-3xl  mt-28 text-center text-natural font-thin ">
        <span className="text-primary xl:text-4xl">Millions</span>
        <span className="text-5xl"> Business trust us</span>
      </h1>
      <h4 className="uppercase text-2xl xl:text-xl text-natural text-center pt-8">
        try to understand users expectation
      </h4>
      <div className="flex flex-col mx-auto border-opacity-50">
        <div className="flex mx-auto gap-x-5">
          <p className="divider w-28 h-[5px] bg-[#28aaa9]"></p>
          <p className="divider w-16 h-[5px] bg-[#1a7184]"></p>
          <p className="divider w-8 h-[5px] bg-[#0c355e]"></p>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 xl:w-2/3 2xl:w-1/2 lg:w-1/2 w-11/12 grid-cols-2 xl:gap-48 2xl:gap-48 lg:gap-48 md:gap-28 gap-10 mx-auto mt-16 ">
        <div>
          <img
            className="w-16 xl:w-80 pb-5 xl:mb-10 2xl:mb-10 lg:mb-10 "
            src={finish}
            alt=""
          />
          <h3 className="text-4xl pb-3 font-bold font-mono text-primary">72</h3>
          <p className="text-2xl text-natural font-bold">Countries</p>
        </div>
        <div>
          <img
            className="w-16 xl:w-28 pb-5 xl:mb-10 2xl:mb-10 lg:mb-10 "
            src={computer}
            alt=""
          />
          <h3 className="text-4xl pb-3 font-bold font-mono text-primary">
            535+
          </h3>
          <p className="text-2xl text-natural font-bold">Computer Projects</p>
        </div>
        <div>
          <img
            className="w-16 xl:w-28 pb-5 xl:mb-10 2xl:mb-10 lg:mb-10 "
            src={women}
            alt=""
          />
          <h3 className="text-4xl pb-3 font-bold font-mono text-primary">
            272+
          </h3>
          <p className="text-2xl text-natural font-bold">Happy Clients</p>
        </div>
        <div>
          <img
            className="w-16 xl:w-28 pb-5 xl:mb-10 2xl:mb-10 lg:mb-10 "
            src={like}
            alt=""
          />
          <h3 className="text-4xl pb-3 font-bold font-mono text-primary">
            482+
          </h3>
          <p className="text-2xl text-natural font-bold">Feedbacks</p>
        </div>
      </div>
      <div>
        <div className="border-2 shadow-red-200xl xl:w-2/3 lg:w-2/4 2xl:w-2/4 mx-auto mt-10 shadow-2xl xl:flex 2xl:flex lg:flex md:flex">
          <div className="p-5">
            <h1 className="text-3xl font-semibold ">
              <span className="text-primary ">Have any question about or</span>
              <span className="text-natural"> get a Products request?</span>
            </h1>
            <h1 className="text-4xl font-thin text-natural mt-8">
              Dont't Hesitate to contact us
            </h1>
          </div>
          <div className="pt-28 flex gap-3 pr-48">
            <button className="btn text-white btn-info mb-5">
              Request For Quote
            </button>
            <button className="btn text-white btn-primary mb-5">
              Contract Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
