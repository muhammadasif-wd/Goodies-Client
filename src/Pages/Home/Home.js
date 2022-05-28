import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Review";
import Parts from "./Parts";
import BusinessSolutions from "./BusinessSolutions";
import WorkSystem from "./WorkSystem";

function Home() {
  return (
    <div>
      <Banner />
      <WorkSystem />
      <Parts />
      <BusinessSolutions />
      <Reviews />
      <BusinessSummary />
    </div>
  );
}

export default Home;
