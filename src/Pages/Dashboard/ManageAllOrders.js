import React, { useEffect, useState } from "react";
import ManageAllOrderDetails from "./ManageAllOrderDetails";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    fetch(`https://evening-brook-77039.herokuapp.com/orders`, {
      method: "GET",
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    })
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-32 mb-16">
      {orders.map((o) => (
        <ManageAllOrderDetails o={o} key={o._id}></ManageAllOrderDetails>
      ))}
    </div>
  );
};

export default ManageAllOrders;
