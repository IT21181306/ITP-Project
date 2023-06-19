const router = require("express").Router();
const Cuser = require("../models/Cuser");

router.route("/add").post((req, res) => {
  const { type, title, First_Name, Last_Name, Job_Position, email, Phone_Number, username, password} = req.body;

  const newCuser = new Cuser({
    type,
    title,
    First_Name,
    Last_Name,
    Job_Position,
    email,
    Phone_Number,
    username,
    password,
  });
  newCuser
    .save()
    .then(() => {
      res.json("User Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  Cuser.find()
    .then((cusers) => {
      res.json(cusers);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let cuserId = req.params.id;
  const { type, title, First_Name, Last_Name, Job_Position, email, Phone_Number, username, password } =
    req.body;

  const updateCuser = {
    type,
    title,
    First_Name,
    Last_Name,
    Job_Position,
    email,
    Phone_Number,
    username,
    password,
  };

  try {
    const update = await Cuser.findByIdAndUpdate(cuserId, updateCuser);
    res.status(200).send({ status: "User updated", cuser: update });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ status: "Error with updating data", error: err.message });
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  let cuserId = req.params.id;

  try {
    await Cuser.findByIdAndDelete(cuserId);
    res.status(200).send({ status: "User deleted" });
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .send({ status: "Error with delete user", error: err.message });
  }
});

router.route("/get/:id").get(async (req, res) => {
  let cuserId = req.params.id;

  try {
    const cuser = await Cuser.findById(cuserId);
    res.status(200).send({ status: "user fetched", cuser: cuser });
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .send({ status: "Error with get user", error: err.message });
  }
});

module.exports = router;

