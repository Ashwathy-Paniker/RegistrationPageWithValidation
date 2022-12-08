const registermodel = require("../Model/RegisterSchema");
const { check, validationResult } = require("express-validator");

const usercontroller = {
  register: async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res
        .status(200)
        .json({
          status: 401,
          err: "Something went wrong with input you entered.Please recheck it !",
        });
      console.log(errors.array());
    } else {
      console.log(req.body);
      console.log(req.file);
      let fname = req.body.fname;
      let lname = req.body.lname;
      let email = req.body.email;
      let password = req.body.password;
      let mobile = req.body.mobile;
      let gender = req.body.gender;
      let ins = new registermodel({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        mobile: mobile,
        gender: gender,
      });
      await ins.save((err) => {
        if (err) {
          res
            .status(200)
            .json({
              status: 401,
              err: "Something went wrong.Might be User registered already !",
            });
        } else {
          res
            .status(200)
            .json({ status: 200, msg: "Registered Successfully !!" });
        }
      });
    }
  },
};
module.exports = usercontroller;
