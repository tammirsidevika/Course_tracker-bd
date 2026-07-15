const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    instructor: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Not Started",
    },

    progress: {
      type: Number,
      default: 0,
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);