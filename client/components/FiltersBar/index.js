import React, { useState } from "react";
import { Menu, Button, Select } from "antd";
import { cats } from "../../utils/dummyData";
const { Option } = Select;

function FlitersBar({ setAllData }) {
  const [filters, setFilters] = useState({
    cat: "",
    price: "",
    order: ""
  });

  const handleChange = (name, value) => {
    const filteredData = allData.filter((course) => {
      if (name === "cat") {
        return course.category === value;
      } else if (name === "price") {
        return course.price === value;
      } else if (name === "order") {
        return course.order === value;
      }
    });

    setFilters({ ...filters, [name]: value });
    setAllData(filters);
  };

  const [cat, setCat] = useState("");
  const [price, setPrice] = useState("");
  const [order, setOrder] = useState("");

  const handleCatChange = (value) => {
    setCat(() => {
      handleChange("cat", value);
      return value;
    });
  };

  const handlePriceChange = (value) => {
    setPrice(() => {
      handleChange("price", value);
      return value;
    });
  };

  const handleOrderChange = (value) => {
    setOrder(() => {
      handleChange("order", value);
      return value;
    });
  };

  return (
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
          {/* Category */}
          <div className="col">
            <div className="row">
              <Select
                showSearch
                allowClear
                name="category"
                placeholder="Category"
                className="form-control"
                optionFilterProp="children"
                onChange={setCat}
                style={{
                  width: 200
                }}
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

          {/* Price */}
          <div className="col">
            <div className="row">
              <Select
                showSearch
                allowClear
                name="price"
                placeholder="Price"
                className="form-control"
                optionFilterProp="children"
                onChange={setPrice}
                style={{
                  width: 200
                }}
                filterOption={(input, option) =>
                  option.children.includes(input)
                }
              >
                <Option key="paid" value="paid">
                  Paid
                </Option>
                <Option key="free" value="free">
                  Free
                </Option>
              </Select>
            </div>
          </div>

          {/* Order */}
          <div className="col">
            <div className="row">
              <Select
                showSearch
                allowClear
                name="order"
                placeholder="Order"
                className="form-control"
                optionFilterProp="children"
                onChange={setOrder}
                style={{
                  width: 200
                }}
                filterOption={(input, option) =>
                  option.children.includes(input)
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option key="Newest" value="newest">
                  Newest
                </Option>
                <Option key="Oldest" value="oldest">
                  Oldest
                </Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      {/* Filter button */}
      <p>{cat}</p>
      <p>{price}</p>
      <p>{order}</p>
    </div>
  );
}

export default FlitersBar;
