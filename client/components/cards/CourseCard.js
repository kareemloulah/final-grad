import { Card, Badge } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";

const { Meta } = Card;

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course;
  return (
    <div className="container">
      <div className="row">
        <Link className="col-3" href={`/course/${slug}`}>
          <a>
            <Card
              className="mb-2"
              cover={
                <img
                  src={image.Location}
                  alt={name}
                  style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  className="p-2"
                />
              }
            >
              <h2 className="font-weight-bold">{name}</h2>
              <p>by {instructor.name}</p>
              <Badge
                count={category}
                style={{ backgroundColor: "#03a9f4" }}
                className="pb-2 mr-2"
              />
              <h4 className="pt-2">
                {paid
                  ? currencyFormatter({
                      amount: price,
                      currency: "usd",
                    })
                  : "Free"}
              </h4>
            </Card>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;