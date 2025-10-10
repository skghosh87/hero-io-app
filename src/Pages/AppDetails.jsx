import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import ratingImg from "/icon-ratings.png";
import downloadImg from "/icon-downloads.png";
import reviewImg from "/icon-review.png";
import Container from "../Components/Container";
import { ToastContainer, toast } from "react-toastify";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LoadingSpinner from "../Components/LoadingSpinner";
import Error from "./Error";

const AppDetails = () => {
  const { id } = useParams();
  const { dataApps, loading, error } = useApps();

  const app = dataApps.find((p) => String(p.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (app && app.id) {
      const existingApps =
        JSON.parse(localStorage.getItem("installation")) || [];
      const installed = existingApps.some((p) => p.id === app.id);
      setIsInstalled(installed);
    }
  }, [app, id]);

  if (loading)
    return (
      <p>
        <LoadingSpinner />
      </p>
    );
  if (error) {
    return (
      <p>
        <Error />
      </p>
    );
  }
  if (!app) return <p>App Not Found!</p>;

  const {
    image,
    title,
    ratingAvg,
    downloads,
    companyName,
    reviews,
    size,
    ratings,
    description,
  } = app;

  const handleAddToInstall = () => {
    const existingApps = JSON.parse(localStorage.getItem("installation")) || [];

    if (isInstalled) {
      return toast(`${title} is already installed!`);
    }

    const updatedAppList = [...existingApps, app];
    localStorage.setItem("installation", JSON.stringify(updatedAppList));

    setIsInstalled(true);

    toast(`Successfully installed ${title}!`);
  };

  const chartData = ratings.map((rating) => ({
    name: rating.name,
    Count: rating.count,
  }));

  return (
    <div>
      <Container>
        <div className="card grid grid-cols-12 ">
          <figure className="col-span-12 md:col-span-4 ">
            <img src={image} alt="App Image" />
          </figure>
          <div className="card-body col-span-12 md:col-span-8">
            <h2 className="card-title text-3xl font-bold">{title}</h2>
            <p className="text-xl">
              Developed By:{" "}
              <span className="text-[#7840e9]">{companyName}</span>
            </p>
            <div className="h-[2px] bg-gray-200 w-full my-4"></div>

            <div className="flex gap-10">
              {/* Downloads */}
              <div>
                <figure className="w-[30px] h-[30px]">
                  <img src={downloadImg} alt="download icon" />
                </figure>
                <h2 className="text-xl py-4">Downloads</h2>
                <p>
                  <span className="text-4xl font-bold">{downloads}</span>
                </p>
              </div>
              {/* Ratings */}
              <div>
                <figure className="w-[30px] h-[30px]">
                  <img src={ratingImg} alt="rating icon" />
                </figure>
                <h2 className="text-xl py-4">Average Ratings</h2>
                <p>
                  <span className="text-4xl font-bold">{ratingAvg}</span>
                </p>
              </div>
              {/* Reviews */}
              <div>
                <figure className="w-[30px] h-[30px]">
                  <img src={reviewImg} alt="review icon" />
                </figure>
                <h2 className="text-xl py-4">Total Reviews</h2>
                <p>
                  <span className="text-4xl font-bold">{reviews}</span>
                </p>
              </div>
            </div>

            <div className="card-actions justify-start py-4">
              <button
                onClick={handleAddToInstall}
                className={`btn text-xl text-white py-7 ${
                  isInstalled ? "bg-green-500" : "bg-[#00d390]"
                }`}
              >
                {isInstalled ? "Installed" : `Install Now (${size})`}
              </button>
            </div>
          </div>
        </div>
        <div className="h-[2px] bg-gray-200 w-full my-4"></div>
        {/* chart */}
        <div style={{ width: "100%", height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              layout="vertical"
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="Count"
                name="Number of Reviews"
                fill="#ff8811"
                activeBar={<Rectangle fill="#ff8811" stroke="#ff8811" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Description Section */}
        <div className="h-[2px] bg-gray-200 w-full my-4"></div>
        <div className="px-2 space-y-2 py-10">
          <h3 className="font-bold text-3xl">Description</h3>
          <p className=" text-[#627382]">{description}</p>
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
