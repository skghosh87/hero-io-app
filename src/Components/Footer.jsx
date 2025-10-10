import React from "react";
import Container from "./Container";
import logo from "/logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <Container>
        <footer className="footer sm:footer-horizontal text-neutral-content p-10">
          <div className=" flex-col justify-center items-center">
            <p>
              <img className="w-[50px] h-[50px]" src={logo} alt="" />
            </p>
            <p>
              <span className="font-bold">Hero App Company Ltd</span> <br />
              Providing reliable tech since 1992
            </p>
          </div>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <div>
            <h6 className="footer-title">Social Link</h6>
            <div className="flex gap-2">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </footer>
        <div className="text-center text-gray-500 text-sm py-10">
          Copyright © {new Date().getFullYear()} - All right reserved
          <br className="block md:hidden" />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
