import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import { Row, Col } from "antd";
import { Paths } from "../utils/dummyData";
import Link from "next/link";

const Index = ({ courses }) => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };
  //   fetchCourses();
  // }, []);

  return (
    <>
    
    <div className="container" >
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-md-3">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
    <div style={{ backgroundColor: "#2d5ebe", padding:'30px'}}>
      <div className="container">
        <Row gutter={[24, 24]}>
          
          {Paths.map((path) => (
            <Col key={path.Id} span={8}>
              <Link href='/path'>
                <div 
                className="card m-2 p-2" 
                style={{ alignItems:'center', cursor:'pointer'}}
                >
                  <h6 className="card-title m-2" > {path.title} </h6> 
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
      
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
