import mongoose from "mongoose";
const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    numberOfEmployees: {
      type: String,
      required: true,
    },
    registerDate: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      trim: true,
    },

    industry: {
      type: String,
      trim: true,
    },

    size: {
      type: String,
      enum: ["1-10", "11-50", "51-200", "201-500", "500+"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Company", companySchema);
