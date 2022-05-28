import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div className="drawer mt-20 w-11/12 mx-auto my-auto">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button text-white"
        >
          <i className="fa fa-bars" aria-hidden="true">
            <span> See More</span>
          </i>
        </label>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <NavLink to="/my_portfolio/my_home">
                HOME <i className="fa fa-home" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/my_portfolio/about_me">
                ABOUT ME <i className="fa fa-file" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/my_portfolio/my_education">
                MY EDUCATION <i className="fas fa-graduation-cap"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/my_portfolio/my_projects">
                MY PROJECTS <i className="fas fa-project-diagram    "></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/my_portfolio/contract_me">
                CONTRACT ME <i className="fa fa-phone" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default MyPortfolio;
