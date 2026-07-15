const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tammirsidevika05_db_user:Devika12345@cluster0.7ywegpc.mongodb.net/courseTrackerDB"
    );

    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database Connection Failed");
    console.log(error);
  }
};

module.exports = connectDB;