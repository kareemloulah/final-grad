import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  DollarCircleFilled,
  EditOutlined,
  LockOutlined,
  MinusCircleTwoTone,
  StopOutlined,
  UnlockOutlined,
  UserOutlined
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
  Badge
} from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

/*  
    Input                              | name: "esam"
    Input email                        | email: "esamrezk4@gmail.com"
    Select                             | role: ['Subscriber']
    Course Tag + Modal Of tags + badge | courses: []
    _id: "629a1bded338a737ecaa6caa"
    createdAt: "2022-06-03T14:34:06.194Z"
    Avatar                             | picture: "/avatar.png"
    password: "$2b$12$rMwkhBaLVjlCB5T8kA63iehMFtvNkmyV4NET5tA97hvyJDRAqDEDm"
    passwordResetCode: "SSVI_L"
    updatedAt: "2022-06-03T19:55:14.866Z"
    __v: 0
*/

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export default function StudentsTable(props) {
  const { tableData = data, setReFetch } = props;
  const [form] = Form.useForm();

  const [coursesLimit, setCoursesLimit] = useState(2);

  const [activeExpRow, setActiveExpRow] = useState();

  const [filteredInfo, setFilteredInfo] = useState({});

  const modifiedData = tableData.map((item) => ({
    ...item,
    key: item._id
  }));

  const printCoursesWithLimit = useCallback((courses, limit) => {
    let coursesToPrint = courses.slice(0, limit);
    if (coursesToPrint.length < courses.length) {
      coursesToPrint.push({
        text: `+${courses.length - coursesToPrint.length} more`,
        value: "more"
      });
    }
    return coursesToPrint;
  }, []);

  function localDay(time) {
    const minutesOffset = time.getTimezoneOffset();
    const millisecondsOffset = minutesOffset * 60 * 1000;
    const local = new Date(time - millisecondsOffset);
    return local.toISOString().substr(0, 10);
  }

  const CourseTag = ({ course }) => {
    return (
      <Tag
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginRight: "5px",
          padding: "5px"
        }}
        color={course?.published ? "success" : "error"}
        key={course?._id}
      >
        <Link href={`/course/${course.slug}`}>
          <a>
            <Avatar
              style={{
                marginRight: "5px"
              }}
              src={course?.image?.Location}
            />
            <span
              style={{
                marginRight: "5px",
                fontSize: "14px",
                fontWeight: "bold"
              }}
            >
              {course?.name}
            </span>
            <Tooltip
              title={course?.paid ? "Course is paid 🤑" : "Course is FREE"}
            >
              <DollarCircleFilled
                style={{
                  fontSize: "20px",
                  color: course?.paid ? "green" : "red"
                }}
              />
            </Tooltip>
          </a>
        </Link>
      </Tag>
    );
  };

  const coursesColumns = [
    // name
    {
      title: "Student Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <span
          style={{
            fontSize: "16px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Tooltip title="Student name">
            {record?.blocked ? (
              <StopOutlined type="danger" />
            ) : (
              <UserOutlined />
            )}{" "}
            <a>{text}</a>
          </Tooltip>
        </span>
      ),

      sorter: (a, b) => a.name.length - b.name.length
    },

    // email
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, record) => (
        <Tooltip title="Student e-mail">
          <span>{text}</span>
        </Tooltip>
      ),

      sorter: (a, b) => a.name.length - b.name.length
    },

    // Course = Tag + modal + badge coursesLimit, setCoursesLimit
    {
      title: "Courses",
      dataIndex: "courses",
      key: "courses",

      filters: ["d"],
      onFilter: (value, record) =>
        record.courses?.some((course) => course?.name === value),
      render: (courses) => (
        <span>
          {courses.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center"
              }}
            >
              {printCoursesWithLimit(courses, coursesLimit)?.map(
                (course, index) =>
                  index < coursesLimit ? (
                    <CourseTag course={course} key={course?._id} />
                  ) : (
                    <Tooltip title="View 3 more">
                      <Button
                        style={{
                          height: "40px",
                          borderRadius: "35px"
                        }}
                        type="primary"
                        onClick={() => setCoursesLimit(coursesLimit + 3)}
                      >
                        More
                      </Button>
                    </Tooltip>
                  )
              )}
            </div>
          ) : (
            <>
              <Tag color="warning">No Courses</Tag>
            </>
          )}
        </span>
      )
    },

    // Joined Date
    {
      title: "Joined Date",
      dataIndex: "createdAt",
      key: "joinedDate",
      render: (text, record) => (
        <Tooltip title="Joined Date">
          <span>{localDay(new Date(text))}</span>
        </Tooltip>
      ),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    },
    // Actions = block
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {record?.blocked ? (
            <Tooltip title="Unblock this student">
              <Button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                type="primary"
                shape="circle"
                icon={<CheckCircleOutlined />}
                onClick={() => toggleBlock(record, "Unblock")}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Block this student">
              <Button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                type="danger"
                shape="circle"
                icon={<StopOutlined />}
                onClick={() => toggleBlock(record, "Block")}
              />
            </Tooltip>
          )}
        </Space>
      )
    }
  ];

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
  };

  const hitEdit = async (values) => {
    console.table(values);

    const resp = await axios.put(`/api/admin/course/${values.slug}`, values);
    setReFetch((e) => !e);
    if (resp.status === 200) {
      toast.success(`Course Updated successfully`);
      setActiveExpRow("0");
    } else {
      toast.error(`Error in Editing Course`);
    }
  };

  const toggleBlock = async (record, type) => {
    const resp = await axios.post(`/api//admin/block/${record._id}`);
    setReFetch((e) => !e);
    if (resp.status === 200) {
      toast.success(`User ${type}ed successfully 😁`);
    } else {
      toast.error(`Error ${type}ing User! ❌`);
    }
  };

  const expandStudents = (record, index, indent, expanded) => {
    console.log("record:", record.slug);

    form.setFieldsValue({
      name: record.name,
      description: record.description,
      price: record.price,
      category: record.category,
      slug: record.slug
    });

    const newINIT = {
      name: tableData[index].name,
      description: tableData[index].description,
      price: tableData[index].price,
      category: [tableData[index].category],
      slug: tableData[index].slug
    };

    return (
      <Form
        form={form}
        initialValues={newINIT}
        name={record.slug}
        onFinish={hitEdit}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          flexFlow: "nowrap",
          gap: "10px"
        }}
        layout="vertical"
        size="small"
      >
        {/* Slug */}
        <Form.Item name="slug"></Form.Item>

        {/* Name */}
        <Form.Item name="name" label="Course Name">
          <Input size="small" allowClear placeholder="Type Course Name" />
        </Form.Item>

        {/* Price */}
        <Form.Item name="price" label="Price">
          <InputNumber
            size="small"
            placeholder="Name a price"
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>

        {/* Categories */}
        <Form.Item
          name="category"
          style={{
            width: "15%"
          }}
          label="Categories"
        >
          <Select
            showSearch
            size="small"
            placeholder="Please select category"
            optionFilterProp="children"
            filterOption={(input, option) => {
              return option.children
                .toLowerCase()
                .includes(input.toLowerCase());
            }}
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase() > optionB.children.toLowerCase()
                ? 1
                : -1
            }
          >
            <Select.Option key={"item.value"} value={"item.value"}>
              {"item.text"}
            </Select.Option>
          </Select>
        </Form.Item>

        {/* Description */}
        <Form.Item name="description" label="Description">
          <Input.TextArea
            size="small"
            allowClear
            placeholder="Write Description"
          />
        </Form.Item>

        <Form.Item
          style={{
            display: "flex",
            alignSelf: "flex-end"
          }}
        >
          <Button htmlType="submit" size="middle" type="primary">
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <>
      <Table
        tableLayout="auto "
        columns={coursesColumns}
        dataSource={modifiedData}
        onChange={handleChange}
        pagination={{
          position: ["bottomCenter"]
        }}
        expandable={{
          expandedRowRender: expandStudents,

          expandIcon: ({ expanded, onExpand, record }) => {
            return expanded ? (
              <Tooltip title="Cancel Editing">
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
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
                    alignItems: "center"
                  }}
                  type="primary"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={(e) => onExpand(record, e)}
                />
              </Tooltip>
            );
          },

          rowExpandable: (record) => true,

          expandedRowKeys: activeExpRow,

          onExpand: (expanded, record) => {
            const keys = [];
            if (expanded) {
              keys.push(record._id);
            }
            setActiveExpRow(keys);
          },

          onExpandedRowsChange: (expandedRows) => {
            if (expandedRows.length > 0) {
              confirm(
                "Are you sure you want to edit this course?\nEither OK or Cancel."
              );
            }
          }
        }}
      />
    </>
  );
}