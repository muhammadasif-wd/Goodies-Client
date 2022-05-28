import useReview from "../../Hooks/useReview";
import ReviewDetails from "../Home/ReviewDetails";

const Reviews = () => {
  const [reviews] = useReview();

  return (
    <div>
      <div className="mx-auto font-serif pb-5 text-3xl font-extrabold text-center xl:mb-5 xl:w-1/2 xl:text-6xl pt-16">
        <h2 className="md:text-5xl xl:text-3xl uppercase">
          <span className="text-natural">Our Top </span>
          <span className="text-primary">Review</span>
          <span className="divider bg-primary h-[3px] w-1/4 mx-auto xl:mt-4 2xl:mt-12 lg:mt-8 mt-4"></span>
        </h2>
      </div>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 w-11/12 mx-auto gap-5 ">
        {reviews?.slice(0, 4).map((review) => (
          <ReviewDetails
            review={review}
            key={review.id}
            style={{ color: "white" }}
          ></ReviewDetails>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
