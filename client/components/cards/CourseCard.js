import { Card, Badge } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";
import { FaStar } from "react-icons/fa";

const { Meta } = Card;

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course;
  return (
    <Link href={`/course/${slug}`}>
      <a>
        <Card
          className="mb-3"
          hoverable
          cover={
            <img
              src={image?.Location}
              alt={name}
              style={{
                height: "200px",
                objectFit: "cover",
                width: "100%",
                borderStartStartRadius: "10px",
                borderStartEndRadius: "10px",
              }}
            />
          }
        >
          <h5 className="font-weight-bold">{name}</h5>
          <p>by {instructor.name}</p>
          {
            <p>
              Rating: 5 <FaStar />{" "}
              {/*course?.rating FaStar should me looped around the value of rating*/}
            </p>
          }

          <Badge
            count={category}
            style={{ backgroundColor: "#03a9f4" }}
            className="pb-2 mr-2"
          />
          <h4 className="pt-2">
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "EGP",
                })
              : "Free"}
          </h4>
        </Card>
      </a>
    </Link>
  );
};

export default CourseCard;
