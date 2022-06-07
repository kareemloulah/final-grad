import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import {
  currentAdmin,
  allCourses,
  updateCourse,
  publishCourse,
  allStudents,
  allInstructors,
} from "../controllers/admin";

router.get("/current-admin", requireSignin, currentAdmin);

router.get("/admin/all-courses", requireSignin, allCourses);
// Edit Course
router.put("/admin/course/:slug", requireSignin, updateCourse);

// Publish unpublish
router.post("/admin/course/publish/:slug", requireSignin, publishCourse);

router.get("/admin/all-students", requireSignin, allStudents);

router.get("/admin/all-instructors", requireSignin, allInstructors);

module.exports = router;
