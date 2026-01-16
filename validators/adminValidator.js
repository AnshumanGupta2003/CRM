import Joi from "joi";
import { errorResponse } from "../utils/responseHandlers.js";

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  profileName: Joi.string().alphanum().min(3).max(30).optional(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),

  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phoneNumber: Joi.string().pattern(new RegExp("^[0-9]{10,15}$")).optional(),
  photo: Joi.string().uri().optional(),
  status: Joi.string().valid("active", "inactive", "suspended").optional(),
  companyId: Joi.string().optional(),
});


const adminValidator = (req, res, next) => {
  const { error } = schema.validate(req.body);
  
  if (error) {
    return errorResponse(res, 400, "Validation Error", { error: error.details[0].message });
  }
  next();
};
export default adminValidator;
