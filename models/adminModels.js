import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    profileName: {
      type: String,
      required: true,
      trim: true,
    },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    photo: {
      type: String, // URL
      default: null,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "deleted"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
