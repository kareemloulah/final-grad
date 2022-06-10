import React, { useState } from "react";
import { Divider, Steps } from "antd";
import { stepsCourse } from "../utils/dummyData";

const { Step } = Steps;

const path = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", current);
    setCurrent(value);
  };
  return (
    <>
      <div className="container header">
        <div className="row">
          <div className="col" style={{ height: "120px", margin: "50px 0" }}>
            <h1> Path title </h1>
            <p>
              {" "}
              Description about this Path and why whould u take this path
              instead of million tracks available{" "}
            </p>
          </div>

          <div className="col"></div>
        </div>
      </div>

      <Divider />

      <div className="container">
        <div style={{ height: "700px", margin: "50px 0" }}>
          <Steps onChange={onChange} current={current} direction="vertical">
            <Step
              title="Course number 1"
              description="description about course."
            />
            <dev> Content 1 </dev>
            <Step
              title="Course number 2"
              description="description about course."
            />
            <Step
              title="Course number 3"
              description="description about course."
            />
            <Step
              title="Course number 4"
              description="description about course."
            />
          </Steps>
        </div>
      </div>
    </>
  );
};

export default path;
