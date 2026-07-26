import mongoose from "mongoose";

const enquiryFormSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true, maxlength: 100 },
    parentName: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    gradeApplyingFor: { type: String, required: true, trim: true },
    campus: {
      type: String,
      enum: ["Aligarh", "Sasni", "Hathras"],
      default: "Aligarh",
    },
    boardingPreference: {
      type: String,
      enum: ["Day Scholar", "Weekly Boarding", "Full Boarding"],
      default: "Day Scholar",
    },
    message: { type: String, trim: true, maxlength: 1000 },
    status: {
      type: String,
      enum: ["new", "contacted", "converted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("EnquiryForm", enquiryFormSchema);
