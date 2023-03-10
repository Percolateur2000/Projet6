const joi = require("joi");

const validation = joi.object({
	email: joi.string().email().trim(true).required(),
	password: joi.string().min(6).trim(true).required(),
});

// Joi.string(): It validates that all properties are string
// Joi.email(): It validates that the email property contains a valid email address.
// Joi.trim(): Requires the string value to contain no whitespace before or after.
// Joi.min(): It specifies the minimum number.
// Joi.required(): Make a property required which will not allow undefined as value.

const userValidation = async (req, res, next) => {
	const payload = {
		email: req.body.email,
		password: req.body.password,
	};
	const { error } = validation.validate(payload);
	if (error) {
		res.status(406).json({ message: `Error in User Data : ${error.message}` });
	} else {
		next();
	}
};
module.exports = userValidation;