import React from "react";
import Container from "./Container";
import appStoreImg from "/appStore.png";
import playStoreImg from "/googlePlay.png";
import heroImg from "/hero.png";
const HeroSection = () => {
  return (
    <div>
      <div className="pt-20 bg-[#F5F5F5] ">
        <Container>
          <div className="text-center space-y-5 px-2">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
              We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
              Apps
            </h1>
            <p className=" w-full md:w-2/3 lg:w-3/4 mx-auto ">
              At.HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="btn-box flex gap-5 items-center justify-center">
              <button className="btn">
                <span>
                  <img
                    className="w-[20px] h-[20px]"
                    src={playStoreImg}
                    alt="App Store"
                  />
                </span>
                Google Play
              </button>
              <button className="btn">
                <span>
                  <img
                    className="w-[20px] h-[20px]"
                    src={appStoreImg}
                    alt="Play Store"
                  />
                </span>
                App Store
              </button>
            </div>
            <figure>
              <img className="mx-auto " src={heroImg} alt="Hero Image" />
            </figure>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
