import React, { Component } from "react";
import "./styles.css";

class textimonial extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="testi">Testimonial</h1>
        <p className="stop">
          Stop wasting time and money designing and managing a website that{" "}
          doesn’t get results. Happiness guaranteed!
        </p>
        <div className="items">
          <div class="cont">
            <img
              src="https://aneventapart.com/uploads/headshots/una-kravets.jpg"
              alt="Avatar"
              class="image1"
            />
            <div class="olay">
              <div class="texter">
                <h1>Una Kravets</h1>
                Stop wasting time and money designing
                <br /> and managing a website that doesn’t
                <br /> get results. Happiness guaranteed!
              </div>
            </div>
          </div>

          <div class="cont">
            <img
              src="https://daakwiaxsjpk6.cloudfront.net/2018/assets/_500x500_crop_center-center_80_none/TobiasAhlinUXLondon2.jpg?mtime=20191211111846"
              alt="Avatar"
              class="image1"
            />
            <div class="olay">
              <div class="texter">
                <h1>Tobias Ahlin</h1>
                Stop wasting time and money designing
                <br /> and managing a website that doesn’t
                <br /> get results. Happiness guaranteed!
              </div>
            </div>
          </div>
          <div class="cont">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/f4435fedd07e80aec1930bc7589e3e48559b4028/e229e/static/portrait-820a8778cc4240d5923e63a6f7b07267.jpg"
              alt="Avatar"
              class="image1"
            />
            <div class="olay">
              <div class="texter">
                <h1>Jina Anne</h1>
                Stop wasting time and money designing
                <br /> and managing a website that doesn’t
                <br /> get results. Happiness guaranteed!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default textimonial;
