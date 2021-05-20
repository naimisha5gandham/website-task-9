import React, { Component } from "react";
import "./style.css";
import Header from "./header";
import Body1 from "./body1";
import Body3 from "./body3";
import Body4 from "./body4";
import Body5 from "./body5";
import Footer from "./footer";
import Client from "./client";
import Testimonial from "./testimonial";
class body extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="home" class="header-hero bg_cover">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-10">
                <div class="header-content text-center">
                  <h3 class="header-title">
                    Handcrafted Landing Page for Startups and SaaS Businesses
                  </h3>

                  <p class="text">
                    A simple, customizable, and, beautiful SaaS business focused
                    landing page to make your project closer to launch!
                  </p>
                  <ul class="header-btn">
                    <li>
                      <a class="main-btn btn-one" href="#">
                        GET IN TOUCH
                      </a>
                    </li>
                    <li>
                      <a
                        class="main-btn btn-two video-popup"
                        href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                      >
                        WATCH THE VIDEO <i class="lni-play"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="header-shape">
            <img
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F08%2Fsuits-8-16-17-recap-2000.jpg"
              alt="shape"
            />
          </div>
        </div>
        <br />
        <br />
        <Body1 />
        <Body3 />
        <Body4 />
        <Testimonial />
        <Client />
        <Body5 />
        <Footer />
      </div>
    );
  }
}

export default body;
