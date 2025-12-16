import jwt from "jsonwebtoken";
import adminSchema from "../models/adminModels.js";
import { errorResponse } from "./responseHandlers.js";

const JWT_SECRET = process.env.JWT_SECRET || "your_super_secret_key";
const JWT_EXPIRES_IN = "7d"; // token validity

// Generate Token
export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

export const verifyMiddlewareToken = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];  ; // Bearer Token
    if (token) {
      const decodedToken = verifyToken(token);
      if (decodedToken) {
        const admin = await adminSchema.findById(decodedToken?.id);
        if (admin) {
          req.admin = decodedToken; // store decrypted data
          next();
        } else {
          return errorResponse(
            res,
            401,
            "User associated with token not found"
          );
        }
      } else {
        return errorResponse(res, 401, "Invalid or expired token");
      }
    } else {
      return errorResponse(res, 401, "No Auth token provided");
    }
  } catch (err) {
    console.error("Token verification error:", err);
    next(err);
  }
};

// Verify / Decrypt Token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET); // returns decrypted data
  } catch (err) {
    return null; // invalid or expired token
  }
};
