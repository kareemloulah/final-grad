import React from "react";
import {
  PlayCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CheckCircleFilled,
  MinusCircleFilled
} from "@ant-design/icons";

export default function CourseInfo() {
  return (
    <div className="d-flex justify-content-center p-5">
      <div className="text-center p-5">
        <PlayCircleOutlined className="text-primary display-1 p-5" />
        <p className="lead">Clcik on the lessons to start learning</p>
      </div>
    </div>
  );
}
