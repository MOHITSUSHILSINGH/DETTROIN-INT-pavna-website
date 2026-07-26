import express from "express";
import { body, validationResult } from "express-validator";
import EnquiryForm from "../models/EnquiryForm.js";

const router = express.Router();

const validators = [
  body("studentName").trim().notEmpty().withMessage("Student name is required"),
  body("parentName").trim().notEmpty().withMessage("Parent/guardian name is required"),
  body("email").trim().isEmail().withMessage("A valid email is required"),
  body("phone").trim().notEmpty().withMessage("Phone number is required"),
  body("gradeApplyingFor").trim().notEmpty().withMessage("Please specify the grade"),
  body("campus").optional().isIn(["Aligarh", "Sasni", "Hathras"]),
  body("boardingPreference").optional().isIn(["Day Scholar", "Weekly Boarding", "Full Boarding"]),
];

// POST /api/enquiry -> create a new admission enquiry
router.post("/", validators, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const saved = await EnquiryForm.create(req.body);
    return res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

// GET /api/enquiry -> list enquiries (admin use)
router.get("/", async (req, res) => {
  try {
    const enquiries = await EnquiryForm.find().sort({ createdAt: -1 });
    return res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error." });
  }
});

export default router;
