// const HMS_Models = require("../Models/model.login.js")

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (user && await bcrypt.compare(password, user.password)) {
//       req.session.userId = user._id;
//       res.send('Logged in');
//     } else {
//       res.send('Invalid credentials');
//     }
//   });
  
//   // Logout route
//   router.post('/logout', (req, res) => {
//     req.session.destroy(err => {
//       if (err) {
//         return res.send('Error logging out');
//       }
//       res.send('Logged out');
//     });
//   });
  
const HMS_Models = require("../Models/model.login.js");
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Session:', req.session);
  console.log('Is Authenticated:', req.session.isAuth);
  console.log('Session ID before authentication:', req.session.id);

  req.session.isAuth = true;
  console.log('Is Authenticated after setting:', req.session.isAuth);
  console.log('Session ID after authentication:', req.session.id);

  try {
    const { username, password } = req.body;
    console.log(username,password);
    const user_instance = await HMS_Models.findOne({ user_name: username });
    console.log(user_instance);

    if (!user_instance) {
      return res.status(200).json({ message: 'Invalid username or password' });
    }
    console.log(".............",password,user_instance.password);
    const isMatch = await bcrypt.compare(password, user_instance.password);
    console.log(isMatch);


    if (!isMatch) {
      return res.status(200).json({ message: 'incorrect password' });
    }
    console.log("else sic.....");
    req.session.user = user_instance.user_name;
    console.log("User instance found:", user_instance);
    console.log("Session user------------------:", req.session.user);

    res.status(200).json({ "status": "user_validated", "username":username,role: user_instance.role, staffId: user_instance.staffId  });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.logout = (req, res) => {
  console.log('Session ID before destroy:', req.session.id);
  console.log("Session user before logout:", req.session.user);

  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        return res.status(500).json({ message: 'Failed to log out' });
      } else {
        res.status(200).json({ message: 'Logged out successfully' });
        console.log('Session after destroy:', req.session);
      }
    });
  } else {
    res.status(400).json({ message: 'No session found' });
  }
};
exports.register = async (req, res) => {
  const { username, password,role } = req.body;

  try {
    const existingUser = await HMS_Models.findOne({ user_name: username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new HMS_Models({
      user_name: username,
      password: password, // Password will be hashed by pre-save hook
      role: role || 'user'  // Default role is 'user' if not provided
    });

    await newUser.save();

    req.session.user = newUser.user_name;
    req.session.isAuth = true;

    res.status(201).json({
      message: 'User registered successfully',
      sessionId: req.session.id,
      user: req.session.user,
      role: newUser.role  // Include the role in the response
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};