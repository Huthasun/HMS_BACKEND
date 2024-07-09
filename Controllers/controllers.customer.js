// const Customer = require('../Models/model.customer');

// exports.registerCustomer = async (req, res) => {
//   const { guestName, gender, phoneNumber,  guestIdProof,  guestIdNumber, address } = req.body;

//   if (!guestName || !gender || !phoneNumber || ! guestIdProof || !guestIdNumber || !address) {
//     return res.status(400).json({ msg: 'Please enter all fields' });
//   }

//   try {
//     const newCustomer = new Customer({
//       guestName,
//       gender,
//       phoneNumber,
//       guestIdProof,
//       guestIdNumber,
//       address
//     });

//     const savedCustomer = await newCustomer.save();
//     res.status(201).json(savedCustomer);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: 'Server Error' });
//   }
// };


const Customer = require('../Models/model.customer');

exports.registerCustomer = async (req, res) => {
  const { guestName, gender, phoneNumber, guestIdProof, guestIdNumber, address } = req.body;

  if (!guestName || !gender || !phoneNumber || !guestIdProof || !guestIdNumber || !address) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const existingCustomer = await Customer.findOne({ phoneNumber, guestIdNumber });

    if (existingCustomer) {
      return res.status(200).json({ msg: 'Record already exists' });
    }

    const newCustomer = new Customer({
      guestName,
      gender,
      phoneNumber,
      guestIdProof,
      guestIdNumber,
      address
    });

    const savedCustomer = await newCustomer.save();
    res.status(200).json({msg: 'Successfully Submitted'} );
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
};

