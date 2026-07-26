import express from "express";
import { body, validationResult } from "express-validator";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

const validators = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
  body("email").trim().isEmail().withMessage("A valid email is required"),
  body("phone").optional({ checkFalsy: true }).trim().isLength({ max: 20 }),
  body("subject").optional({ checkFalsy: true }).trim().isLength({ max: 150 }),
  body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 2000 }),
];

// POST /api/contact  -> create a new contact message
router.post("/", validators, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const saved = await ContactMessage.create(req.body);
    return res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

// GET /api/contact -> list messages (admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    return res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error." });
  }
});

export default router;
