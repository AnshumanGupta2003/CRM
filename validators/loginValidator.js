import Joi from "joi";
import { errorResponse } from "../utils/responseHandlers.js";

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().required(),
});


const loginValidator = (req, res, next) => {
  const { error } = schema.validate(req.body);
  
  if (error) {
    return errorResponse(res, 400, "Validation Error", { error: error.details[0].message });
  }
  next();
};
export default loginValidator;
