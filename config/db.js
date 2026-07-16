const express = require("express");
const cors = require("cors");
const dns = require("dns");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

// Optional (for MongoDB Atlas)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Course Tracker Backend Running...");
});

// Start Server
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});
