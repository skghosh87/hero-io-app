import React from "react";
import Container from "../Components/Container";

const TrustSection = () => {
  return (
    <div className="btn-color py-20 ">
      <Container>
        <div className=" text-center text-white space-y-10">
          <div>
            <h2 className="font-bold text-4xl md:text-5xl">
              Trusted by Millions, Built for You
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center px-2 md:px-20">
            <div className="space-y-3">
              <p className="text-base ">Total Downloads</p>
              <h4 className="font-extrabold text-6xl">29.6M</h4>
              <p className="text-base ">21% more than last month</p>
            </div>
            <div className="space-y-3">
              <p className="text-base ">Total Reviews</p>
              <h4 className="font-extrabold text-6xl">906K</h4>
              <p className="text-base ">46% more than last month</p>
            </div>
            <div className="space-y-3">
              <p className="text-base ">Active Apps</p>
              <h4 className="font-extrabold text-6xl">132+</h4>
              <p className="text-base ">31 more will Launch</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrustSection;
