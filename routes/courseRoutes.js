const express = require("express");

const router = express.Router();

const {
  addCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

// Add Course
router.post("/add", addCourse);

// Get All Courses
router.get("/", getCourses);

// Get Single Course
router.get("/:id", getCourse);

// Update Course
router.put("/:id", updateCourse);

// Delete Course
router.delete("/:id", deleteCourse);

module.exports = router;