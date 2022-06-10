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
  updateStudent,
  allInstructors,
  updateInstructor,
  blockUser,
} from "../controllers/admin";

router.get("/current-admin", requireSignin, currentAdmin);

router.get("/admin/all-courses", requireSignin, allCourses);
// Edit Course
router.put("/admin/course/:slug", requireSignin, updateCourse);

// Publish unpublish course
router.post("/admin/course/publish/:slug", requireSignin, publishCourse);

// Block unblock user
router.post("/admin/block/:id", requireSignin, blockUser);

// Get all students
router.get("/admin/all-students", requireSignin, allStudents);

// Edit Student
router.put("/admin/student/:slug", requireSignin, updateStudent);

// Get all instructors
router.get("/admin/all-instructors", requireSignin, allInstructors);

// Edit Instructor
router.put("/admin/instructor/:slug", requireSignin, updateInstructor);

module.exports = router;
