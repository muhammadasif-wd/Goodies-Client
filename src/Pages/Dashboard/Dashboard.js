import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile mt-20 ">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <label
          for="dashboard-sidebar"
          class="drawer-button btn btn-primary xl:hidden lg:hidden md:hidden block w-28 pt-2"
        >
          MORE FEATURES
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/my_profile">MY PROFILE</NavLink>
          </li>
          {!admin && (
            <div>
              <li>
                <NavLink to="/dashboard/add_review">ADD REVIEW</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my_order">MY ORDER</NavLink>
              </li>
            </div>
          )}

          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/manage_all_order">
                  MANAGE ALL ORDER
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage_product">MANAGE PRODUCT</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add_a_product">ADD A PRODUCT</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/make_admin">MAKE ADMIN</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Dashboard;
