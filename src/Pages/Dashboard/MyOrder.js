import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyOrderDetails from "./MyOrderDetails";
import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import axiosPrivate from "../../axiosPrivate";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const email = user?.email;
    const url = `https://evening-brook-77039.herokuapp.com/orders?email=${email}`;
    try {
      const { data } = await axiosPrivate.get(url);
      setOrders(data);
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 401 || error.response.status === 403) {
        signOut(auth);
        Navigate("/login");
      }
    }
  };
  getOrders();
  return (
    <div>
      <h1 className="text-3xl text-primary text-center underline">
        MY ORDER {orders?.length}
      </h1>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5 ">
        {orders?.map((o) => (
          <MyOrderDetails o={o} key={o?._id}></MyOrderDetails>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
