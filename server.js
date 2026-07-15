const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
const dns=require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])
app.use(express.json());
app.use(cors());

connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
// Test Route
app.get("/", (req, res) => {
    res.send("Course Tracker Backend Running...");
});

app.listen(3001, () => {
    console.log("Server Running at http://localhost:3001");
});