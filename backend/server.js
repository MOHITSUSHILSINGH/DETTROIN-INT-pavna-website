import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Core middleware
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  })
);
app.use(express.json({ limit: "10kb" }));

// Basic rate limiting on form endpoints to prevent spam/abuse
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { success: false, message: "Too many requests. Please try again later." },
});

app.use("/api/contact", formLimiter, contactRoutes);
app.use("/api/enquiry", formLimiter, enquiryRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "pavna-school-backend" });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

start();
