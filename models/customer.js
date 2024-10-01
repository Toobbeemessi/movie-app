const Joi = require("joi");
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  isGold: {
    type: Boolean,
    default: false,
  },

  phone: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean(),
    phone: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
exports.customerSchema = customerSchema;
