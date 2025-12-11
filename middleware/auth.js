import { verifyToken } from "../utils/jwt.js";
import { errorResponse } from "../utils/responseHandlers.js";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN

  if (!token) return errorResponse(res, 401, "Token missing");

  const decoded = verifyToken(token);

  if (!decoded) return errorResponse(res, 401, "Invalid or expired token");

  req.user = decoded; // store decrypted data

  next();
};
