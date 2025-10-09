import React from "react";
import HeroSection from "../Components/HeroSection";
import TrustSection from "../Components/TrustSection";
import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import Container from "../Components/Container";
import useApps from "../Hooks/useApps";

const Home = () => {
  const { dataApps, loading, error } = useApps();

  const showCards = dataApps.slice(0, 8);

  return (
    <div>
      <HeroSection />
      <TrustSection />
      <div>
        <Container>
          <div className="pt-6">
            <h1 className="text-5xl text-center font-bold">Trending Apps</h1>
            <p className="text-center pt-4">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 ">
            {" "}
            {showCards.map((dataApp) => (
              <AppCard key={dataApp.id} dataApp={dataApp} />
            ))}
          </div>
          <div className="text-center p-5">
            <Link className="btn btn-color text-white" to="/apps">
              Show All
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
