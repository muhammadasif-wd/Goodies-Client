import React from "react";

const MyOrderDetails = ({ o }) => {
  const { name, email, productName, phone, productQuantity, _id } = o;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {productName?.slice(0, 25)}
          </div>
          <p>Product ID: {_id}</p>
          <p>User Name: {name}</p>
          <p className="text-md">Email: {email}</p>
          <p className="text-md">Phone: {phone}</p>
          <p className="text-md">Product Quantity: {productQuantity}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="btn btn-primary uppercase text-base-100">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrderDetails;
