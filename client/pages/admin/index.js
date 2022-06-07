import { useState, useEffect } from "react";
import axios from "axios";
import AdminRoute from "../../components/routes/AdminRoute";
import { Avatar, Tooltip } from "antd";
import Link from "next/link";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import TableComponent from "../../components/Table";

const AdminIndex = () => {
  const [courses, setCourses] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    loadCourses();
  }, [reFetch]);

  const loadCourses = async () => {
    const { data } = await axios.get("/api/admin/all-courses");
    setCourses(data);
  };

  const myStyle = { marginTop: "-15px", fontSize: "10px" };

  /*
    name: "Test course 2"
    category: "machine"
    createdAt: "2022-06-05T00:51:43.169Z"
    description: "Test course "
    image: {ETag: '"17870c4989078cc744c259f3d8672469"', Location: 'https://coursemebucket.s3.amazonaws.com/kNEWtXbz010iM8o2sE6yy.jpeg', key: 'kNEWtXbz010iM8o2sE6yy.jpeg', Key: 'kNEWtXbz010iM8o2sE6yy.jpeg', Bucket: 'coursemebucket'}
    instructor: "629bf5fe4c41f2484c36e5e5"
    lessons: (5) [{…}, {…}, {…}, {…}, {…}]
    paid: true
    price: 10.99
    published: true
    slug: "test-course-2"
    updatedAt: "2022-06-05T00:52:18.700Z"
    __v: 0
    _id: "629bfe1f4c41f2484c36e656"
  */

  return (
    <AdminRoute>
      <h1 className="jumbotron text-center square">Instructor Dashboard</h1>

      <TableComponent
        tableData={courses}
        type="courses"
        reFetch={reFetch}
        setReFetch={setReFetch}
      />

      {courses &&
        courses.map((course) => (
          <>
            <div className="media pt-2">
              <Avatar
                size={80}
                src={course.image ? course.image.Location : "/course.png"}
              />

              <div className="media-body pl-2">
                <div className="row">
                  <div className="col">
                    <Link
                      href={`/instructor/course/view/${course.slug}`}
                      className="pointer"
                    >
                      <a className="mt-2 text-primary">
                        <h5 className="pt-2">{course.name}</h5>
                      </a>
                    </Link>
                    <p style={{ marginTop: "-10px" }}>
                      {course.lessons.length} Lessons
                    </p>

                    {course.lessons.length < 5 ? (
                      <p style={myStyle} className="text-warning">
                        At least 5 lessons are required to publish a course
                      </p>
                    ) : course.published ? (
                      <p style={myStyle} className="text-success">
                        Your course is live in the marketplace
                      </p>
                    ) : (
                      <p style={myStyle} className="text-success">
                        Your course is ready to be published
                      </p>
                    )}
                  </div>

                  <div className="col-md-3 mt-3 text-center">
                    {course.published ? (
                      <Tooltip title="Published">
                        <CheckCircleOutlined className="h5 pointer text-success" />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Unpublished">
                        <CloseCircleOutlined className="h5 pointer text-warning" />
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </AdminRoute>
  );
};

export default AdminIndex;
