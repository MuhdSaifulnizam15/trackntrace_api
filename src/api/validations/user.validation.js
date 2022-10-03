const Joi = require('joi');
const { password } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    full_name: Joi.string().required(),
    role: Joi.string(),
    birth_date: Joi.date(),
    gender: Joi.string(),
    phone_number: Joi.string(),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  })
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  })
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
};