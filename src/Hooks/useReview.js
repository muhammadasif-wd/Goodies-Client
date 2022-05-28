import { useEffect, useState } from "react";

const useReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://evening-brook-77039.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return [review, setReview];
};
export default useReview;
