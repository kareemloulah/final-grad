import { Button, Space, Table, Tag } from "antd";
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

const TableComponent = () => {
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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
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
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";

            if (tag === "loser") {
              color = "volcano";
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button onClick={hitDelete}>Delete</button>
          <button onClick={hitEdit}>Edit</button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        pagination={{
          position: ["bottomCenter"],
        }}
      />
    </>
  );
};

export default TableComponent;
