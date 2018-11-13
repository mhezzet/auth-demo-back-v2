const Joi = require('joi');

const bodySchema = {
  email: Joi.string()
    .email()
    .min(4)
    .max(50)
    .required(),
  password: Joi.string()
    .min(3)
    .max(1024)
    .required()
};

module.exports = function(req, res, next) {
  const { error } = Joi.validate(req.body, bodySchema);
  if (error) return res.status(400).json(error.details[0].message);
  next();
};
