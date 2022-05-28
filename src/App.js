import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Shared/Navbar";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs";
import NotFound from "./Pages/NotFound";
import RequireAuth from "./Authentication/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import SignIn from "./Pages/Log/SignIn";
import SignUp from "./Pages/Log/SignUp";
import AboutMe from "./Pages/MyPortfolio/AboutMe";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import MyHome from "./Pages/MyPortfolio/MyHome";
import MyEducation from "./Pages/MyPortfolio/MyEducation";
import ContractMe from "./Pages/MyPortfolio/ContractMe";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProjects from "./Pages/MyPortfolio/MyProjects";
import AddReview from "./Pages/Dashboard/AddReview";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import RequireAdmin from "./Authentication/RequireAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import AddAProduct from "./Pages/Dashboard/AddAProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar>
        <Routes>
          <Route>
            {/* Public Routes */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/sign_in" element={<SignIn />}></Route>
            <Route path="/sign_up" element={<SignUp />}></Route>
            <Route path="*" element={<NotFound />}></Route>

            {/* Portfolio Routes */}
            <Route path="my_portfolio" element={<MyPortfolio />}>
              <Route path="about_me" element={<AboutMe />}></Route>
              <Route path="my_home" element={<MyHome />}></Route>
              <Route path="my_education" element={<MyEducation />}></Route>
              <Route path="my_projects" element={<MyProjects />}></Route>
              <Route path="contract_me" element={<ContractMe />}></Route>
            </Route>
            {/* Dashboard Routes */}
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
              <Route
                path="add_review"
                element={
                  <RequireAuth>
                    <AddReview />
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="my_order"
                element={
                  <RequireAuth>
                    <MyOrder />
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="my_profile"
                element={
                  <RequireAuth>
                    <MyProfile />
                  </RequireAuth>
                }
              ></Route>
              {/* Required Admin Routes */}
              <Route
                path="manage_product"
                element={
                  <RequireAuth>
                    <RequireAdmin>
                      <ManageProducts></ManageProducts>
                    </RequireAdmin>
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="manage_all_order"
                element={
                  <RequireAuth>
                    <RequireAdmin>
                      <ManageAllOrders></ManageAllOrders>
                    </RequireAdmin>
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="add_a_product"
                element={
                  <RequireAuth>
                    <RequireAdmin>
                      <AddAProduct></AddAProduct>
                    </RequireAdmin>
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="make_admin"
                element={
                  <RequireAuth>
                    <RequireAdmin>
                      <MakeAdmin></MakeAdmin>
                    </RequireAdmin>
                  </RequireAuth>
                }
              ></Route>
            </Route>
            {/* Private Routes */}
            <Route
              path="/purchase/:id"
              element={
                <RequireAuth>
                  <Purchase />
                </RequireAuth>
              }
            ></Route>
          </Route>
        </Routes>
      </Navbar>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
