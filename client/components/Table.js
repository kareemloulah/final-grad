import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  LockOutlined,
  MinusCircleTwoTone,
  UnlockOutlined,
} from "@ant-design/icons";
import {
  Button,
  Space,
  Table,
  Tag,
  Avatar,
  Tooltip,
  Form,
  Input,
  Radio,
  InputNumber,
  Select,
} from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  const { tableData = data, type = "courses", setReFetch } = props;
  const [form] = Form.useForm();

  const [cols, setCols] = useState(null);
  const [filteredInfo, setFilteredInfo] = useState({});
  // const [expandEdit, setExpandEdit] = useState(false);

  // console.log(tableData);

  useEffect(() => {
    switch (type) {
      case "courses":
        setCols(coursesColumns);
        break;
      case "students":
        setCols(studentsColumns);
        break;
      case "instructors":
        setCols(coursesColumns);
        break;
      default:
        break;
    }
  }, [type]);

  const categoryFiltersBuilder = (dataToBuildFrom) => {
    let filters = [];
    console.log("ARRAY", Array.isArray(dataToBuildFrom?.category));
    if (
      Array.isArray(dataToBuildFrom?.category) &&
      dataToBuildFrom?.category?.length > 0
    ) {
      filters = dataToBuildFrom?.category.map((cat) => {
        return {
          text: cat,
          value: cat,
        };
      });
    } else {
      dataToBuildFrom.forEach((course) => {
        if (course?.category?.length > 0) {
          filters.push({
            text: course.category,
            value: course.category,
          });
        }
      });
    }
    return filters;
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
  };

  const hitEdit = async (values, record) => {
    console.table(values);
    console.log("record:", record);

    // const resp = await axios.put(`/api/admin/course/${record.slug}`, values);
    // setReFetch((e) => !e);
    // if (resp.status === 200) {
    //   toast.success(`Course Updated successfully`);
    // } else {
    //   toast.error(`Error ${type}ing Course`);
    // }
    // toast.error(`Error in Editing Course`);
  };

  const togglePublish = async (record, type) => {
    const resp = await axios.post(`/api/admin/course/publish/${record.slug}`);
    setReFetch((e) => !e);
    if (resp.status === 200) {
      toast.success(`Course ${type}ed successfully`);
    } else {
      toast.error(`Error ${type}ing Course`);
    }
  };

  const coursesColumns = [
    {
      title: "Cover",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <Tooltip title="Course Cover">
          <Avatar size={45} src={text.Location} />
        </Tooltip>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Course Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link href={`/course/${record.slug}`}>
          <Tooltip title="View Course">
            <a>{text}</a>
          </Tooltip>
        </Link>
      ),

      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Instructor Name",
      dataIndex: ["instructor", "name"],
      key: "instructor",
      render: (text, record) => (
        // <Link href={`/course/${record.slug}`}>
        // <a>{text}</a>
        // </Link>
        <Tooltip title="Course Owner Name">
          <span>{text}</span>
        </Tooltip>
      ),

      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) =>
        text === 0 ? (
          <Tooltip title="This course is totaly FREE">
            <Tag>Free</Tag>
          </Tooltip>
        ) : (
          <Tooltip title={`This course price is ${text} LE`}>
            <Tag>{text}</Tag>
          </Tooltip>
        ),
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Categories",
      dataIndex: "category",
      key: "category",
      filterss: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filters: categoryFiltersBuilder(tableData),
      onFilter: (value, record) => record.category === value,
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
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {record.published ? (
            <Tooltip title="Unpublish this course">
              <Button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                type="danger"
                shape="circle"
                icon={<UnlockOutlined />}
                onClick={() => togglePublish(record, "Unpublish")}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Publish this course">
              <Button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                type="primary"
                shape="circle"
                icon={<LockOutlined />}
                onClick={() => togglePublish(record, "Publish")}
              />
            </Tooltip>
          )}
        </Space>
      ),
    },
  ];

  const expandCourses = (record) => (
    <Form
      initialValues={{
        name: record.name,
        description: record.description,
        price: record.price,
        category: record?.category,
      }}
      form={form}
      name="edit-course" 
      onFinish={(values, record) => hitEdit(values, record)}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flexFlow: "nowrap",
        gap: "10px",
      }}
      layout="vertical"
      size="small"
    >
      <Form.Item name="name" label="Course Name">
        <Input
          value={record.name}
          size="small"
          allowClear
          placeholder="Type Course Name"
        />
      </Form.Item>
      <Form.Item name="price" label="Price">
        <InputNumber
          value={record.price}
          size="small"
          placeholder="Name a price"
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        />
      </Form.Item>
      <Form.Item
        name="category"
        style={{
          width: "15%",
        }}
        label="Categories"
      >
        <Select
          mode="tags"
          size="small"
          placeholder="Please select"
          value={record?.category}
          onChange={handleChange}
        >
          {categoryFiltersBuilder(tableData).map((item) => (
            <Select.Option key={item.value} value={item.value}>
              {item.text}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea
          value={record.description}
          size="small"
          allowClear
          placeholder="Write Description"
        />
      </Form.Item>

      <Form.Item
        style={{
          display: "flex",
          alignSelf: "flex-end",
        }}
      >
        <Button htmlType="submit" size="middle" type="primary">
          Save
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <>
      <Table
        rowKey={(record) => record._id}
        columns={cols}
        dataSource={tableData}
        onChange={handleChange}
        pagination={{
          position: ["bottomCenter"],
        }}
        expandable={{
          expandedRowRender: expandCourses,

          expandIcon: ({ expanded, onExpand, record }) => {
            return expanded ? (
              <Tooltip title="Cancel Editing">
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  type="danger"
                  shape="circle"
                  icon={<CloseOutlined />}
                  onClick={(e) => onExpand(record, e)}
                />
              </Tooltip>
            ) : (
              <Tooltip title="Edit this course">
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  type="primary"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={(e) => onExpand(record, e)}
                />
              </Tooltip>
            );
          },
        }}
      />
    </>
  );
};

export default TableComponent;
