import React from "react";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import Container from "../Components/Container";
import { Search } from "lucide-react";

const Apps = () => {
  const { dataApps } = useApps();
  return (
    <div>
      <Container>
        <div className="pt-6">
          <h1 className="text-5xl text-center font-bold">
            Our All Applications
          </h1>
          <p className="text-center pt-4">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">({dataApps.length}) Apps Found</p>
          <p>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search Apps" />
            </label>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 ">
          {" "}
          {dataApps.map((dataApp) => (
            <AppCard key={dataApp.id} dataApp={dataApp} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Apps;
