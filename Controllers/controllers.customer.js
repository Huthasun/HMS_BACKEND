const Customer = require('../Models/model.customer');

exports.registerCustomer = async (req, res) => {
  const { guestName, gender, phoneNumber,  guestIdProof,  guestIdNumber, address } = req.body;

  if (!guestName || !gender || !phoneNumber || ! guestIdProof || !guestIdNumber || !address) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const newCustomer = new Customer({
      guestName,
      gender,
      phoneNumber,
      guestIdProof,
      guestIdNumber,
      address
    });

    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
