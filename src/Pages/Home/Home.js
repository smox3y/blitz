import * as React from "react";
import "./Home.css";
import rectangle from "./assets/rectangle.svg";
import ellipse1 from "./assets/ellipse1.svg";
import group from "./assets/group.svg";
import vector from "./assets/vector.svg";
import ellipse2 from "./assets/ellipse2.svg";
import line from "./assets/line.svg";
import ellipse from "./assets/ellipse.svg";
const Home = () => {
  return (
    <div className="desktop-1">
      <div className="flex-container">
        <img className="group-1" src={group} />
        <span className="blitz">Blitz</span>
        <span className="portfolio">Portfolio</span>
        <span className="resources">Resources</span>
        <span className="pricing">Pricing</span>
        <span className="company">Company</span>
        <span className="login">Login</span>
        <div className="rectangle-4">
          <span className="sign-up">Sign Up</span>
        </div>
      </div>
      <div className="flex-container-1">
        <div className="flex-container-2">
          <span className="blitz-your-way-to-fi">
            Blitz your way to financial freedom.
          </span>
          <img className="rectangle-5" src={rectangle} />
          <span className="break-free-from-the">
            Break free from the chains of traditional payment methods.{" "}
          </span>
          <div className="flex-container-3">
            <button className="group-3">
              <div className="rectangle-6">
                <span className="request-demo">Request Demo</span>
              </div>
            </button>
            <span className="scroll-more">Scroll More</span>
          </div>
        </div>
        <div className="flex-container-4">
          <div className="rectangle-1">
            <span className="card-holder">Card Holder</span>
            <span className="jharzee-gram">Jharzee Gram</span>
            <span className="num-1234-5678-9000-34">1234 5678 9000 3456</span>
            <div className="flex-container-5">
              <img className="ellipse-2" src={ellipse2} />
              <img className="ellipse-1" src={ellipse1} />
            </div>
            <div className="flex-container-6">
              <span className="visa">VISA</span>
              <span className="num-1224">12|24</span>
            </div>
          </div>
          <img className="ellipse" src={ellipse} />
        </div>
      </div>
      <div className="flex-container-7">
        <div className="rectangle-7">
          <div className="flex-container-8">
            <div className="flex-container-9">
              <span>350k</span>
              <span className="registered-business">Registered Business</span>
            </div>
            <img className="line" src={line} />
            <div className="flex-container-10">
              <span className="num-110-m">110M</span>
              <span className="revenue-generated">Revenue Generated </span>
            </div>
            <img className="line-1" src={line} />
            <div className="flex-container-11">
              <span className="num-79">79%</span>
              <span className="revenue-growth">Revenue Growth </span>
            </div>
          </div>
          <div className="flex-container-12">
            <img className="group-6" src={group} />
            <span className="blitz-1">Blitz</span>
            <span className="portfolio-1">Portfolio</span>
            <span className="resources-1">Resources</span>
            <span className="pricing-1">Pricing</span>
            <span className="company-1">Company</span>
            <span className="login-1">Login</span>
            <div className="rectangle-4-1">
              <span className="sign-up-1">Sign Up</span>
            </div>
          </div>
          <div className="flex-container-13">
            <div className="flex-container-14">
              <span className="blitz-your-way-to-fi-1">
                Blitz your way to financial freedom.
              </span>
              <img className="rectangle-5-1" src={rectangle} />
              <span className="lorem-ipsum-dolor-si">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et odio
                morbi magna proin purus. Tellus in ornare.
              </span>
              <div className="flex-container-15">
                <div className="rectangle-6-1">
                  <span className="request-demo-1">Request Demo</span>
                </div>
                <span className="scroll-more-1">Scroll More</span>
              </div>
            </div>
            <div className="flex-container-16">
              <div className="rectangle-1-1">
                <span className="card-holder-1">Card Holder</span>
                <span className="jharzee-gram-1">Jharzee Gram</span>
                <span className="num-1234-5678-9000-34-1">
                  1234 5678 9000 3456
                </span>
                <div className="flex-container-17">
                  <img className="ellipse-5" src={ellipse2} />
                  <img className="ellipse-4" src={ellipse1} />
                </div>
                <div className="flex-container-18">
                  <span className="visa-1">VISA</span>
                  <span className="num-1224-1">12|24</span>
                </div>
              </div>
              <img className="ellipse-3" src={ellipse} />
            </div>
          </div>
        </div>
        <div className="rectangle-8">
          <div className="flex-container-19">
            <span className="num-350-k">350k</span>
            <span className="registered-business-1">Registered Business</span>
          </div>
          <img className="line-2" src={line} />
          <div className="flex-container-20">
            <span className="num-110-m-1">110M</span>
            <span className="revenue-generated-1">Revenue Generated </span>
          </div>
          <img className="line-3" src={line} />
          <div className="flex-container-21">
            <span className="num-79-1">79%</span>
            <span className="revenue-growth-1">Revenue Growth </span>
          </div>
        </div>
      </div>
      <img className="vector" src={vector} />
    </div>
  );
};
export default Home;