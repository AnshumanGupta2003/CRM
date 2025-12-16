import { errorResponse } from "../utils/responseHandlers.js";

export const globalErrorHandler = (err, req, res, next) => {
  console.error(err.stack);
  return errorResponse(res, 500, "Failed to create user", {
    error: error.message,
  });
};
