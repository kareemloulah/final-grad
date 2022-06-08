import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "300px",
  color: "#2d5ebe",
  lineHeight: "300px",
  textAlign: "center",
  background: "#E3EDFF",
};

const carousel = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default carousel;
