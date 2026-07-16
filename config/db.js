const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://tammirsidevika05_db_user:Devika12345@cluster0.7ywegpc.mongodb.net/courseTrackerDB?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Database Connected Successfully");
    console.log("Host:", conn.connection.host);
    console.log("Database:", conn.connection.name);
    console.log("Ready State:", mongoose.connection.readyState);
  } catch (error) {
    console.log("Database Connection Failed");
    console.log(error);
  }
};

module.exports = connectDB;
