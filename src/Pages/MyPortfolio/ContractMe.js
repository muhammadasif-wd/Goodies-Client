import React from "react";

const ContractMe = () => {
  return (
    <div>
      <h2 className="text-4xl uppercase text-center pt-5">
        <span className="text-primary">Contact </span>Me
      </h2>
      <div className="divider"></div>
      <div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-y-5">
          <div className="w-96 mx-auto my-auto">
            <div className="gap-y-3 grid grid-cols-1">
              <h3 className="text-3xl">
                <span className="text-primary">Contract </span>Info
              </h3>
              <h3>
                <span className="text-primary">
                  <i className="fas fa-envelope"></i>
                </span>{" "}
                muhammadasif2m@gmail.com
              </h3>
              <h3>
                <span className="text-primary">
                  <i className="fas fa-phone"></i>
                </span>{" "}
                +880-18300-18193
              </h3>
              <h3>
                <span className="text-primary">
                  <i className="fas fa-phone"></i>
                </span>{" "}
                +880-19637-30660
              </h3>
              <h3>
                <span className="text-primary">
                  <i className="fas fa-map-marker-alt"></i>
                </span>{" "}
                Dhaka, Bangladesh - 1214.
              </h3>
            </div>
          </div>

          <form action="">
            <div className="grid grid-cols-1  mx-auto w-11/12">
              <input
                type="text"
                placeholder="name"
                className="border p-2 rounded mt-2"
              />
              <input
                type="email"
                placeholder="email"
                className="border p-2 rounded mt-2"
              />
              <input
                type="text"
                placeholder="project"
                className="border p-2 rounded mt-2"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="border message p-2 rounded mt-2"
                placeholder="message"
              ></textarea>

              <button type="submit" className="btn bg-primary text-white mt-5">
                send <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContractMe;
