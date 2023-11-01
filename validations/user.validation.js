const userDataValidate = (req, res, next) => {
  let errorMessage = "";
  if (!req.body.email ||
    req.body.email.match(
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
    )
  ) {
    errorMessage = "provide valid email";
  }

  // send error
  if (errorMessage) {
    res.status(400).json({ success: false, errorMessage });
  }

  next();
};

module.exports = {
  userDataValidate,
};
