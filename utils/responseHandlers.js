export const successResponse = (res, statusCode, message, data = {}) => {
  return res.status(statusCode).json({
    message,
    ...data,
  });
}



export const errorResponse = (res, statusCode, message, data = {}) => {
  return res.status(statusCode).json({
    message,
    ...data,
  });
}