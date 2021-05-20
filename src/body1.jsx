import React, { Component } from "react";
//import Body2 from "./body2";
import "./style.css";

class body1 extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-title pb-10">
              <h4 class="title">Crafted For</h4>
              <p class="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-md-6">
                <div class="services-content mt-40 d-sm-flex">
                  <div class="services-icon">
                    <i class="lni-bolt"></i>
                  </div>
                  <div class="services-content media-body">
                    <h4 class="services-title">Startup</h4>
                    <p class="text">
                      Short description for the ones
                      <br /> who look for something new.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="services-content mt-40 d-sm-flex">
                  <div class="services-icon">
                    <i class="lni-bar-chart"></i>
                  </div>
                  <div class="services-content media-body">
                    <h4 class="services-title">SaaS Business</h4>
                    <p class="text">
                      Short description for the ones
                      <br /> who look for something new.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="services-content mt-40 d-sm-flex">
                  <div class="services-icon">
                    <i class="lni-brush"></i>
                  </div>
                  <div class="services-content media-body">
                    <h4 class="services-title">Agency</h4>
                    <p class="text">
                      Short description for the ones
                      <br /> who look for something new.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="services-content mt-40 d-sm-flex">
                  <div class="services-icon">
                    <i class="lni-bulb"></i>
                  </div>
                  <div class="services-content media-body">
                    <h4 class="services-title">App Landing</h4>
                    <p class="text">
                      Short description for the ones
                      <br /> who look for something new.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default body1;
