const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://USERNAME:PASSWORD@cluster0.7ywegpc.mongodb.net/courseTrackerDB?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Database Connected Successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
