import React from "react";
import { toast } from "react-toastify";

const ManageAllOrderDetails = ({ o }) => {
  const deleteOrder = () => {
    const url = `https://evening-brook-77039.herokuapp.com/orders/${o._id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          window.location.reload();
          toast.success("Delete Your Orders");
        }
      });
  };
  return (
    <div>
      <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {o.productName?.slice(0, 25)}
            </div>
            <p>Product ID: {o._id}</p>
            <p>User Name: {o.name}</p>
            <p className="text-md">Email: {o.email}</p>
            <p className="text-md">Phone: {o.phone}</p>
            <p className="text-md">Product Quantity: {o.productQuantity}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              onClick={deleteOrder}
              className="btn btn-primary uppercase text-base-100"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrderDetails;
