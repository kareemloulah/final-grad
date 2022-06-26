import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "300px",
  color: "#2d5ebe",
  lineHeight: "300px",
  textAlign: "center",
};

const carousel = () => (
  <Carousel autoplay style={{background:"url('https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')" , backgrounSize:"cover", height:"60vh"}}>
    <div>
      <h3 style={contentStyle}>
      The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!.
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid.</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!.</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Increase Your Data Analytic Skills – Highly Valued And Sought After By Employers</h3>
    </div>
  </Carousel>
);

export default carousel;
