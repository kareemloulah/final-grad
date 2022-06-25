import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import { Menu, Button, Select } from "antd";
import { cats } from "../utils/dummyData";
const { Option } = Select;

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
      {/* Filters */}
      <div
        style={{
          backgroundColor: "#E3EDFF",
          marginBottom: "50px"
        }}
      >
        <div className="container pt-5 pb-5">
          <div className="row">
            {/* Flitered by text */}
            <div className="col-sm-1">
              <span>Filter By</span>
            </div>

            {/* Fliters dropdown */}
            <div className="col">
              <div className="row">
                <Select
                  showSearch
                  style={{
                    width: 200
                  }}
                  placeholder="Categories"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {cats?.map((cat, index) => (
                    <Option key={index} value={cat}>
                      {cat}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Courses */}
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
