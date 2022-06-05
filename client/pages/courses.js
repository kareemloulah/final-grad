import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
const courses = ({ courses }) => {
  return (
    <>
      <div 
      className="justify-content-center align-items-center"
      style={{ backgroundColor:"#E3EDFF", height:'120px', marginBottom:'50px' }}>

          <h4>Filter system</h4>

      </div>
        <div className="container">
          <div className="row">
            {courses.map((course) => (
              <div key={course._id} className="col-sm-3">
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
      courses: data,
    },
  };
}
export default courses;
