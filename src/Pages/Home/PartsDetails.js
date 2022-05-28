import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PartsDetails({ part }) {
  const {
    _id,
    img,
    price,
    name,
    descriptions,
    maximumQuantity,
    minimumQuantity,
  } = part;

  const [seeMore, setSeeMore] = useState(false);

  const navigate = useNavigate();
  const navigateToParts = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-2">
        <img className="w-full xl:w-56 mx-auto" src={img} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name.slice(0, 30)}</div>
          <p className="te xt-md">ID: ${_id}</p>
          <p className="te xt-md">price: ${price}</p>
          <p className="text-md">Available Quantity: {maximumQuantity}</p>
          <p className="text-md">Minimum Quantity: {minimumQuantity}</p>
          <p>
            {seeMore ? descriptions : descriptions.slice(0, 100)}
            <button
              className="pl-1 text-orange-400"
              onClick={() => setSeeMore(!seeMore)}
            >
              ...see more
            </button>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={() => navigateToParts(_id)}
            className="btn btn-primary uppercase text-base-100"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default PartsDetails;
