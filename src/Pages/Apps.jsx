import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import Container from "../Components/Container";

const Apps = () => {
  const { dataApps, loading, error } = useApps();
  const [searchApps, setSearchApps] = useState("");

  const term = searchApps.trim().toLocaleLowerCase();

  const validData = Array.isArray(dataApps) ? dataApps : [];

  const filteredApps = term
    ? validData.filter((app) => {
        const appName = app.title || "";
        return appName.toLocaleLowerCase().includes(term);
      })
    : validData;

  if (loading) {
    return (
      <Container>
        <p className="text-center py-10 text-xl font-medium">
          Loading applications...
        </p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p className="text-center py-10 text-xl text-red-600 font-medium">
          Error loading data.
        </p>
      </Container>
    );
  }

  if (filteredApps.length === 0 && term.length > 0) {
    return (
      <div className="bg-[#f5f5f5]">
        <Container>
          <div className="pt-6">
            <h1 className="text-5xl text-center font-bold">
              Our All Applications
            </h1>
            <p className="text-center pt-4">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          <div className="flex justify-between items-center mt-5">
            <p className="font-bold">({filteredApps.length}) Apps Found</p>
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
                <input
                  type="search"
                  required
                  placeholder="Search Apps"
                  value={searchApps}
                  onChange={(e) => setSearchApps(e.target.value)}
                />
              </label>
            </p>
          </div>

          <div className="text-center py-20">
            <p className="text-6xl font-extrabold text-gray-500 mb-5">
              No App Found.
            </p>
            <button
              onClick={() => setSearchApps("")}
              className="btn btn-color text-white"
            >
              Show All
            </button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5]">
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
          <p className="font-bold">({filteredApps.length}) Apps Found</p>
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
              <input
                type="search"
                required
                placeholder="Search Apps"
                value={searchApps}
                onChange={(e) => setSearchApps(e.target.value)}
              />
            </label>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5 pb-4 ">
          {" "}
          {filteredApps.map((dataApp) => (
            <AppCard key={dataApp.id} dataApp={dataApp} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Apps;
