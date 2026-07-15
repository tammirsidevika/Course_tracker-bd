const Course = require("../models/Course");

// Add Course
const addCourse = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const newCourse = new Course(req.body);

    const savedCourse = await newCourse.save();

    res.status(201).json({
      message: "Course Added Successfully",
      course: savedCourse,
    });
  } catch (error) {
    console.log("========== ADD COURSE ERROR ==========");
    console.error(error);

    res.status(500).json({
      message: "Failed to add course",
      error: error.message,
    });
  }
};

// Get All Courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch courses",
      error: error.message,
    });
  }
};

// Get Single Course
const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json(course);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error fetching course",
      error: error.message,
    });
  }
};

// Update Course
const updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to update course",
      error: error.message,
    });
  }
};

// Delete Course
const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to delete course",
      error: error.message,
    });
  }
};

module.exports = {
  addCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
};
