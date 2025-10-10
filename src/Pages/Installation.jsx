import React, { useEffect, useState } from "react";
import ratingImg from "/icon-ratings.png";
import downloadImg from "/icon-downloads.png";
import Container from "../Components/Container";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  // For Uninstall
  const handleRemove = (idToRemove) => {
    const updatedList = installation.filter((app) => app.id !== idToRemove);
    setInstallation(updatedList);
    toast.success("successfully uninstalled!");
    localStorage.setItem("installation", JSON.stringify(updatedList));
  };

  // Sorting ITEM
  const sortedItem = [...installation].sort((a, b) => {
    const sizeA = parseFloat(a.size);
    const sizeB = parseFloat(b.size);

    if (sortOrder === "size-dsc") {
      return sizeB - sizeA;
    }
    if (sortOrder === "size-asc") {
      return sizeA - sizeB;
    }
    return 0;
  });

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));

    if (Array.isArray(savedList)) {
      setInstallation(savedList);
    }
  }, []);

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10 md:py-20">
      <Container>
        <div className=" text-center space-y-3 py-10 mb-8">
          <h2 className="text-[#001931] text-3xl md:text-5xl font-extrabold">
            Your Installed Apps
          </h2>
          <p className="text-[#627382] text-md md:text-xl px-4">
            Manage and view the apps you have installed from the store.
          </p>
        </div>

        <div className="flex justify-between items-center mb-6 px-2">
          <div>
            <h6 className="font-semibold text-xl text-[#001931]">
              (<span>{installation.length}</span>) Apps Found
            </h6>
          </div>
          <div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border ]"
            >
              <option value={"none"} disabled={true}>
                Sort By Size
              </option>
              <option value="size-dsc">High-Low</option>
              <option value="size-asc">Low-High</option>
            </select>
          </div>
        </div>

        <div className="card-container space-y-4">
          {sortedItem.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center shadow-lg border-2 border-dashed border-gray-300">
              <h1 className="text-[#627382] font-semibold text-3xl">
                No Installed Apps Found
              </h1>
              <p className="text-gray-500 mt-2">
                It looks like you haven't installed any apps yet.
              </p>
            </div>
          ) : (
            sortedItem.map((p) => (
              <div
                key={p.id}
                className="flex justify-between items-center gap-5 flex-wrap bg-white rounded-xl p-4 shadow-md transition duration-300 hover:shadow-xl border-l-4 border-[#00D390]"
              >
                <div className="flex items-center gap-5 ">
                  <figure className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
                    <img
                      className="object-cover w-full h-full"
                      src={p.image}
                      alt={`${p.title} image`}
                    />
                  </figure>
                  <div className="space-y-1">
                    <h2 className="text-[#001931] font-bold text-lg md:text-xl">
                      {p.title}
                    </h2>
                    <div className="flex gap-3 items-center text-sm">
                      <div className="flex items-center text-green-700px py-1 font-medium gap-2">
                        <img
                          className="h-[20px] w-[20px]"
                          src={downloadImg}
                          alt=""
                        />
                        <p className="text-base">{p.downloads}</p>
                      </div>

                      <div className="flex items-center text-yellow-700 px-2 py-1  font-medium text-base gap-2 ">
                        <img
                          className="h-[20px] w-[20px]"
                          src={ratingImg}
                          alt=""
                        />
                        <p className="text-base"> {p.ratingAvg}</p>
                      </div>

                      <div className=" font-medium text-[#627382]">
                        <span className="text-gray-500 text-base px-2 py-1 ">
                          {p.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(p.id)}
                  className="btn bg-[#00d390] text-white font-semibold py-2 px-6  shadow-lg "
                >
                  Uninstall
                </button>
              </div>
            ))
          )}
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Installation;
