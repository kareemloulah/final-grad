import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import Link from "next/link";
import React, { useState } from "react";
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const TableComponent = (props) => {
  const { tableData = data } = props;

  console.log("tableData => ", tableData);
  console.log("data => ", data);

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const hitEdit = () => {
    alert("hit edit");
  };

  const hitDelete = () => {
    alert("hitDelete");
  };
  const coursesaa = ["name", "category", "price", "lessons"];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link href={`/course/${record.slug}`}>
          <a>{text}</a>
        </Link>
      ),

      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Categories",
      dataIndex: "category",
      key: "category",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      render: (category) => (
        <span>
          {Array.isArray(category) &&
            category?.map((cat) => (
              <Tag key={category}>{cat.toUpperCase()}</Tag>
            ))}
          <Tag key={category}>{category?.toUpperCase()}</Tag>
        </span>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={hitEdit}
          />
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            type="danger"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={hitDelete}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={tableData}
        onChange={handleChange}
        pagination={{
          position: ["bottomCenter"],
        }}
      />
    </>
  );
};

export default TableComponent;
