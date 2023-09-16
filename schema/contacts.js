const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .pattern(/^[A-Za-z\s-]+$/)
    .message(
      "The name must be between 2 and 30 characters and can contain only letters, spaces, and hyphens."
    )
    .required(),
  phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .message("The phone number should have the format (123) 123-1234.")
    .required(),
  email: Joi.string().email().required(),
});

const updateSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .pattern(/^[A-Za-z\s-]+$/),

  phone: Joi.string().pattern(/^\(\d{3}\) \d{3}-\d{4}$/),

  email: Joi.string().email(),
}).or("name", "phone", "email");

module.exports = { addSchema, updateSchema };
