import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "jhifwoehfniuwvberifbyukerbfiurwefbewriufbuiewb";
const JWT_EXPIRES_IN = "7d"; // token validity

// Generate Token
export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

// Verify / Decrypt Token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET); // returns decrypted data
  } catch (err) {
    return null; // invalid or expired token
  }
};
