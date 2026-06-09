require("dotenv").config();
const express = require("express");
const serviceRequestRoutes = require("./src/routes/serviceRequestRoutes");
const cors = require("cors");
const db = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/service-requests", serviceRequestRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Zepnest Service Request API Running Successfully",
  });
});

app.get("/env-test", (req, res) => {
  res.json({
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  });
});

app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 AS test");

    res.status(200).json({
      success: true,
      message: "Database Connected Successfully",
      data: rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Database Connection Failed",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});