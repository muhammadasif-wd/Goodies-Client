import React, { useState } from "react";

const OurReviews = (props) => {
  const [seeMore, setSeeMore] = useState(false);
  const { name, img, ratings, review } = props.review;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-2">
        <div className="p-5 my-auto rounded-img ">
          <img src={img} alt="" />
        </div>
        <div className="w-full text-natural p-5">
          <h1 className="pt-3 pb-2 text-3xl text-primary">Name: {name}</h1>
          <span className="text-red-500">Rating: {ratings}</span>
          <p className="">
            <span className="text-natural">
              Review Comment: {seeMore ? review : review.slice(0, 90)}
            </span>
            <button
              onClick={() => setSeeMore(!seeMore)}
              className="font-semibold text-orange-500"
            >
              , see more...
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurReviews;
