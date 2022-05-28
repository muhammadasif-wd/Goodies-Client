import React, { useEffect, useState } from "react";
import MyOrder from "./MyOrder";

function OrderFetch() {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    fetch(`https://evening-brook-77039.herokuapp.com/orders`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <MyOrder order={order} key={order._id}></MyOrder>
      ))}
    </div>
  );
}

export default OrderFetch;
