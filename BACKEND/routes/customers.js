const router = require("express").Router();
const Customer = require("../models/Customer");

router.route("/reg").post((req, res) => {
    const {ctitle, cFirst_Name, cLast_Name, cemail, cPhone_Number, cusername, cpassword} = req.body;
  
    const newCustomer = new Customer({
      ctitle,
      cFirst_Name,
      cLast_Name,
      cemail,
      cPhone_Number,
      cusername,
      cpassword,
    });
    newCustomer
      .save()
      .then(() => {
        res.json("Customer Added");
      })
      .catch((err) => {
        console.log(err);
      });
  });

router.route("/").get((req, res) => {
  Customer.find()
    .then((customers) => {
      res.json(customers);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let customerId = req.params.id;
  const { ctitle, cFirst_Name, cLast_Name, cemail, cPhone_Number, cusername, cpassword } =
    req.body;

  const updateUser = {
    ctitle,
      cFirst_Name,
      cLast_Name,
      cemail,
      cPhone_Number,
      cusername,
      cpassword,
  };

  try {
    const update = await Customer.findByIdAndUpdate(customerId, updateCustomer);
    res.status(200).send({ status: "Customer updated", Customer: update });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ status: "Error with updating data", error: err.message });
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  let customerId = req.params.id;

  try {
    await User.findByIdAndDelete(customerId);
    res.status(200).send({ status: "Customer deleted" });
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .send({ status: "Error with delete customer", error: err.message });
  }
});

router.route("/getss/:id").get(async (req, res) => {
  let customerId = req.params.id;

  try {
    const user = await User.findById(customerId);
    res.status(200).send({ status: "customer fetched", customer: customer });
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .send({ status: "Error with get customer", error: err.message });
  }
});

module.exports = router;

