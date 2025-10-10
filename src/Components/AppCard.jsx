import React from "react";
import ratingImg from "/icon-ratings.png";
import downloadImg from "/icon-downloads.png";
import { Link } from "react-router";

const AppCard = ({ dataApp }) => {
  const { id, image, title, ratingAvg, downloads } = dataApp;
  return (
    <div>
      <Link to={`/apps/${id}`}>
        <div className="card border bg-base-100 shadow-sm hover:scale-105 transition ease-in-out cursor-pointer">
          <figure>
            <img className="w-[150px] h-[150px] mt-3" src={image} />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-center">{title}</h2>
          </div>
          <div className="flex justify-between items-center p-5">
            <p className="flex gap-1 items-center text-green-600">
              <img className="w-[20px] h-[20px]" src={downloadImg} alt="" />
              {downloads}
            </p>
            <p className="flex gap-1 items-center text-yellow-600">
              <img className="w-[20px] h-[20px]" src={ratingImg} alt="" />
              {ratingAvg}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
