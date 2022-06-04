import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
const courses = ({ courses }) => {
  return (
    <>
      <div className="container-xl">
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-3">
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
