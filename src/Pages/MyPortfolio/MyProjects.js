import React from "react";
import goodies from "../../Assets/projectsPicture/1.png";
import pc_house from "../../Assets/projectsPicture/2.png";
import pc from "../../Assets/projectsPicture/3.png";

function MyProjects() {
  return (
    <div className="grid grid-cols-1 mb-32 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
      <div className="shadow-xl my-auto p-10 w-11/12 mx-auto mt-16 ">
        <img src={goodies} alt="" />
        <h3 className="text-xl text-primary pt-5 font-bold">Goodies</h3>
        <p className="text-sm">Goodies is a manufacturing website</p>
        <a href="https://goodies-fed4a.web.app/" target={"_blank"}>
          <button className="btn btn-primary uppercase text-base-100 w-full mt-3">
            VISITS SITE
          </button>
        </a>
      </div>
      <div className="shadow-xl my-auto p-10 w-11/12 mx-auto mt-16 ">
        <img src={pc_house} alt="" />
        <h3 className="text-xl text-primary pt-5 font-bold">PC House</h3>
        <p className="text-sm">PC House is a warehouse website</p>
        <a href="https://pc-house-32c57.web.app/" target={"_blank"}>
          <button className="btn btn-primary uppercase text-base-100 w-full mt-3">
            VISITS SITE
          </button>
        </a>
      </div>
      <div className="shadow-xl my-auto p-10 w-11/12 mx-auto mt-16 ">
        <img src={pc} alt="" />
        <h3 className="text-xl text-primary pt-5 font-bold">PC</h3>
        <p className="text-sm">PC is a Single Products Review Website</p>
        <a href="https://pc-house.netlify.app/" target={"_blank"}>
          <button className="btn btn-primary uppercase text-base-100 w-full mt-5">
            VISITS SITE
          </button>
        </a>
      </div>
    </div>
  );
}

export default MyProjects;
