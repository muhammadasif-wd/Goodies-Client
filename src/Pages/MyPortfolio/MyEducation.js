import React from "react";

const MyEducation = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl mt-5 text-center ">
          MY <span className="text-primary">EDUCATION</span>
        </h3>
        <div className="divider"></div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-y-16 w-5/6 gap-x-40">
          <div className="flex">
            <div>
              <div className="avatar">
                <div className="w-10 rounded-full bg-primary">
                  <p className="text-center pt-2 text-white">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="divider divider-horizontal h-80 bg-info w-1"></div>
              </div>
            </div>
            <div className="pl-5 pt-2">
              <p className="bg-[#333333] text-white rounded-3xl px-5 w-1/2">
                2021_2022
              </p>
              <div className="w-56 pt-5">
                <h1 className="text-xl">
                  Front End <span className="text-primary">Development</span>
                </h1>
                <p>
                  Percentage based on education and my own skills as a
                  programming hero.
                </p>
                <p className=" font-bold pt-5">
                  <span>December</span> To{" "}
                  <span className="text-primary">January</span>
                </p>
                <div className="text-xs pr-10 flex pt-5">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    HTML:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 90% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="90"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    CSS:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 75% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="75"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    GIT_HUB:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 75% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="75"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="avatar">
                <div className="w-10 rounded-full bg-primary">
                  <p className="text-center pt-2 text-white">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="divider divider-horizontal h-80 bg-info w-1"></div>
              </div>
            </div>
            <div className="pl-5 pt-2">
              <p className="bg-[#333333] text-white rounded-3xl px-5 w-1/2">
                2021_2022
              </p>
              <div className="w-56 pt-5">
                <h1 className="text-xl">
                  Front End <span className="text-primary">Development</span>
                </h1>
                <p>
                  Percentage based on education and my own skills as a
                  programming hero.
                </p>
                <p className=" font-bold pt-5">
                  <span>December</span> To{" "}
                  <span className="text-primary">January</span>
                </p>
                <div className="text-xs pr-10 flex pt-5">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    Tailwind:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 80% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="80"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    Bootstrap:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 75% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="75"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="avatar">
                <div className="w-10 rounded-full bg-primary">
                  <p className="text-center pt-2 text-white">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="divider divider-horizontal h-80 bg-info w-1"></div>
              </div>
            </div>
            <div className="pl-5 pt-2">
              <p className="bg-[#333333] text-white rounded-3xl px-5 w-1/2">
                2021_2022
              </p>
              <div className="w-56 pt-5">
                <h1 className="text-xl">
                  Front End <span className="text-primary">Development</span>
                </h1>
                <p>
                  Percentage based on education and my own skills as a
                  programming hero.
                </p>
                <p className=" font-bold pt-5">
                  <span>December</span> To{" "}
                  <span className="text-primary">January</span>
                </p>
                <div className="text-xs pr-10 flex pt-5">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    JAVA_SCRIPT:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 70% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="70"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    ECMA_SCRIPT:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 75% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="75"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="avatar">
                <div className="w-10 rounded-full bg-primary">
                  <p className="text-center pt-2 text-white">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="divider divider-horizontal h-80 bg-info w-1"></div>
              </div>
            </div>
            <div className="pl-5 pt-2">
              <p className="bg-[#333333] text-white rounded-3xl px-5 w-1/2">
                2021_2022
              </p>
              <div className="w-56 pt-5">
                <h1 className="text-xl">
                  Front End <span className="text-primary">Development</span>
                </h1>
                <p>
                  Percentage based on education and my own skills as a
                  programming hero.
                </p>
                <p className=" font-bold pt-5">
                  <span>March</span> To{" "}
                  <span className="text-primary">April</span>
                </p>
                <div className="text-xs pr-10 flex pt-5">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    REACT:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 80% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="80"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    REACT_ROUTER:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 80% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="80"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    REACT_BOOTSTRAP:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 85% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="85"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>{" "}
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    REACT_DAISY_UI:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 95% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="95"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="flex mb-32">
            <div>
              <div className="avatar">
                <div className="w-10 rounded-full bg-primary">
                  <p className="text-center pt-2 text-white">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="divider divider-horizontal h-80 bg-info w-1"></div>
              </div>
            </div>
            <div className="pl-5 pt-2">
              <p className="bg-[#333333] text-white rounded-3xl px-5 w-1/2">
                2021_2022
              </p>
              <div className="w-56 pt-5">
                <h1 className="text-xl">
                  Front End <span className="text-primary">Development</span>
                </h1>
                <p>
                  Percentage based on education and my own skills as a
                  programming hero.
                </p>
                <p className=" font-bold pt-5">
                  <span>April</span> To{" "}
                  <span className="text-primary">May</span>
                </p>
                <div className="text-xs pr-10 flex pt-5">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    MONGO_DB:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 70% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="70"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    EXPRESS_JS:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 75% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="75"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    AXIOS:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 75% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="75"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>{" "}
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    STRIPE:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 75% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="75"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>{" "}
                <div className="text-xs pr-10 flex">
                  <label
                    htmlFor=""
                    className="mr-2 text-primary font-bold flex pt-4"
                  >
                    JSON_WEB_TOKEN:
                  </label>
                  <span className="text-primary flex font-bold pt-4">
                    <span className=""> 75% </span>
                    <span>
                      <progress
                        className="progress progress-error w-56"
                        value="75"
                        max="100"
                      ></progress>
                    </span>
                  </span>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
