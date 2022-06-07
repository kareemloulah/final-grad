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
    const courses = await Course.find({}).sort({ createdAt: -1 }).exec();
    res.json(courses);
  } catch (err) {
    console.log(err);
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

export const allInstructors = async (req, res) => {
  try {
    const users = await User.find({ role: "Instructor" }).exec();

    res.json(users);
  } catch (err) {
    console.log(err);
  }
};
