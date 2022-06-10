import User from "../models/user";
import Course from "../models/course";
import queryString from "query-string";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

export const currentAdmin = async (req, res) => {
  try {
    let user = await User.findById(req.user._id).select("-password").exec();
    // console.log("CURRENT INSTRUCTOR => ", user);
    if (!user.role.includes("Admin")) {
      return res.sendStatus(403);
    } else {
      res.json({ ok: true });
    }
  } catch (err) {
    console.log(err);
  }
};

export const allCourses = async (req, res) => {
  try {
    const courses = await Course.find({})
      .sort({ createdAt: -1 })
      .populate("instructor", "name")
      .exec();
    res.json(courses);
  } catch (err) {
    console.log(err);
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { slug } = req.params;

    console.log("req.body => ", req.body);
    
    const updated = await Course.findOneAndUpdate({ slug }, req.body, {
      new: true
    }).exec();

    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};

export const publishCourse = async (req, res) => {
  try {
    const { slug } = req.params;

    const toUpdate = await Course.findOne({ slug }).exec();

    toUpdate.published = !toUpdate.published;

    await toUpdate.save();

    res.json(toUpdate);
  } catch (err) {
    console.log("err => ", err);
    return res.status(400).send(err);
  }
};

export const allStudents = async (req, res) => {
  try {
    const users = await User.find({ role: "Subscriber" }).exec();

    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { slug } = req.params;

    const updated = await Course.findOneAndUpdate({ slug }, req.body, {
      new: true
    }).exec();

    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};

export const allInstructors = async (req, res) => {
  try {
    const users = await User.find({ role: "Instructor" }).exec();

    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

export const updateInstructor = async (req, res) => {
  try {
    const { slug } = req.params;

    const updated = await Course.findOneAndUpdate({ slug }, req.body, {
      new: true
    }).exec();

    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};
