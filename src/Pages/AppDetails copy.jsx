import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import ratingImg from "/icon-ratings.png";
import downloadImg from "/icon-downloads.png";
import reviewImg from "/icon-review.png";
import Container from "../Components/Container";
import { ToastContainer, toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { dataApps, loading } = useApps();

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

  if (loading) return <p>Loading ......</p>;
  if (!app) return <p>App Not Found!</p>;

  const { image, title, ratingAvg, downloads, companyName, reviews, size } =
    app;

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

        {/* chart */}
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
