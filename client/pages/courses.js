import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import { Menu, Button } from "antd";
import Dropdown from "react-bootstrap/Dropdown";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        )
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        )
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        )
      }
    ]}
  />
);

const courses = ({ courses }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#E3EDFF",
          marginBottom: "50px"
        }}
      >
        <div className="container-fluid pt-5 pb-5">
          <div className="row">
            <div className="col-sm-1">
              <span>Filter By</span>
            </div>
            <div className="col">
              <div className="row">
                <Dropdown className="col">
                  <Dropdown.Toggle
                    style={{ borderColor: "#2D5EBE", borderRadius: "5px" }}
                    variant="light"
                    id="dropdown-basic"
                  >
                    Categories
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="col">
                  <Dropdown.Toggle
                    style={{ borderColor: "#2D5EBE", borderRadius: "5px" }}
                    variant="light"
                    id="dropdown-basic"
                  >
                    Categories
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="col">
                  <Dropdown.Toggle
                    style={{ borderColor: "#2D5EBE", borderRadius: "5px" }}
                    variant="light"
                    id="dropdown-basic"
                  >
                    Categories
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="col">
                  <Dropdown.Toggle
                    style={{ borderColor: "#2D5EBE", borderRadius: "5px" }}
                    variant="light"
                    id="dropdown-basic"
                  >
                    Categories
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="col">
                  <Dropdown.Toggle
                    style={{ borderColor: "#2D5EBE", borderRadius: "5px" }}
                    variant="light"
                    id="dropdown-basic"
                  >
                    Categories
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-lg-3 col-md-6 col-sm-12">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data
    }
  };
}
export default courses;
