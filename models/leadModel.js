import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      lowercase: true
    },

    phone: {
      type: String,
      required: true
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true
    },

    source: {
      type: String,
      enum: ["website", "referral", "linkedin", "cold-call", "email", "other"],
      default: "other"
    },

    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "lost", "converted"],
      default: "new"
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    notes: {
      type: String
    },

    expectedValue: {
      type: Number,
      default: 0
    },

    followUpDate: {
      type: Date
    }
  },
  { timestamps: true }
);

export  default mongoose.model("Lead", leadSchema);
