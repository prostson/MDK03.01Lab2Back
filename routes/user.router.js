const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const { checkSchema } = require("express-validator");
const {
  userDataValidate,
  userDataValidateSchemaBased,
  userDataValidateChainMethod,
} = require("../validations/user.validation");

// using traditional validation middleware
router.post("/add", userDataValidate, UserController.addUser);

module.exports = router;
