import React, { useState } from "react";
import { toast } from "react-toastify";

const ManageProductDetails = ({ p }) => {
  const {
    _id,
    img,
    price,
    name,
    descriptions,
    maximumQuantity,
    minimumQuantity,
  } = p;

  const [seeMore, setSeeMore] = useState(false);

  const deleteParts = () => {
    const url = `https://evening-brook-77039.herokuapp.com/parts/${_id}`;
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
      <div className="max-w-sm rounded overflow-hidden border-2 mb-32">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-full xl:w-56 mx-auto" src={img} alt="" />
          </figure>
          <div className="card-body ">
            <h2 className=" text-xl mb-2">{name?.slice(0, 30)}</h2>
            <p>ID: {_id}</p>
            <p className="text-md">price: ${price}</p>
            <p className="text-md">Available Quantity: {maximumQuantity}</p>
            <p className="text-md">Minimum Quantity: {minimumQuantity}</p>
            <p>
              {seeMore ? descriptions : descriptions?.slice(0, 100)}
              <button
                className="pl-1 text-orange-400"
                onClick={() => setSeeMore(!seeMore)}
              >
                ...see more
              </button>
            </p>
            <div className="card-actions ">
              <label
                onClick={() => deleteParts(_id)}
                htmlFor="delete-confirm-modal"
                className="btn btn-error w-64"
              >
                <p className="text-center">Delete</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductDetails;
