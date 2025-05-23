// const express = require("express");
// const mongoosee = require("mongoose");
// const userLogin = require("./Controllers/controllers.login.js");
// const userRoute = require("./Routes/route.login.js");
// const  HMS_Models = require ("./Models/model.login.js")
// const session = require('express-session');
// const bcrypt = require('bcrypt');
// const app = express();


// // middleware
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// app.use(session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: false,
//     // store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/userAuth' }),
//   }));

// routes
// app.use("/hms/", userRoute);


// app.get("/", (req, res) => {
//     res.send("Hello from Node API Server Updated");
// });




// mongoosee
//   .connect(
//     "mongodb+srv://saikiranautomac:jXGLmMQ7RKuO00uP@cluster0.qssqx4c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  
//   .then(() => {
//     console.log("Connected to database!");
//     app.listen(3000, () => {
//       console.log("Server is running on port 3000");
//     });
//   })
//   .catch((error) => {
//     console.log("Connection failed!",error);
//   });

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const session = require('express-session');
// const userRoute = require("./Routes/route.login.js");
// const cookieParser = require("cookie-parser");
// const app = express();


// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(cors())
// // app.use(cors({
// //   origin:["hhtp://localhost:3000","http://192.168.29.68:3000"]
// // }))



// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false } 
// }));

// // Routes
// app.use("/hms", userRoute);

// app.get("/", (req, res) => {
//   res.send("Hello from Node API Server Updated");
// });

// // Connect to MongoDB
// mongoose
//   .connect("mongodb+srv://saikiranautomac:jXGLmMQ7RKuO00uP@cluster0.qssqx4c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//   .then(() => {
//     console.log("Connected to database!");
//     app.listen(5000, () => {
//       console.log("Server is running on port 5000");
//     });
//   })
//   .catch((error) => {
//     console.log("Connection failed!", error);
//   });

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const session = require('express-session');
// const userRoute = require("./Routes/route.login.js");
// const cookieParser = require("cookie-parser");
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// // Define CORS options
// const corsOptions = {
//   origin: ["http://localhost:3000", "http://192.168.29.68:3000"],
//   credentials: true, // Enable credentials
// };

// app.use(cors(corsOptions));

// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false } 
// }));

// // Routes
// app.use("/hms", userRoute);

// app.get("/", (req, res) => {
//   res.send("Hello from Node API Server Updated");
// });

// // Connect to MongoDB
// mongoose
//   .connect("mongodb+srv://saikiranautomac:jXGLmMQ7RKuO00uP@cluster0.qssqx4c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//   .then(() => {
//     console.log("Connected to database!");
//     app.listen(5000, () => {
//       console.log("Server is running on port 5000");
//     });
//   })
//   .catch((error) => {
//     console.log("Connection failed!", error);
//   });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require('express-session');
const cookieParser = require("cookie-parser");
const path = require('path');

// Importing routes
const customerRoutes = require("./Routes/route.customer");
const userRoute = require("./Routes/route.login");
const bookingRoutes = require('./Routes/bookingsroutes'); // Ensure correct path
const hotelRoutes = require('./Routes/hotelRoutes');
const roomRoutes = require('./Routes/roomRoutes');
const primaryGuestRoutes = require('./Routes/primaryGuest.route'); // Ensure correct path
const roomStatusRoutes = require('./Routes/roomStatusRoutes');


// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Define CORS options
const corsOptions = {
  // origin: ["http://localhost:3000", "http://192.168.29.68:3000"],
  origin: ["https://hms.automactechnologies.in","http://192.168.1.3:3000","http://localhost:3000"],
  // origin:["http://192.168.1.6:3000","http://192.168.137.1:3000","http://192.168.1.7:3000","http://localhost:3000"],
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Session management
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false , httpOnly: true,  sameSite: "none"},
}));

// Routes
app.use("", customerRoutes);
app.use("/", userRoute);
app.use("/bookings", bookingRoutes);
app.use("/create-primary-guest", primaryGuestRoutes); // Ensure correct path
app.use("/hotels", hotelRoutes);
app.use('/rooms', roomRoutes);
app.use('/api/room-status', roomStatusRoutes);
// Serve static files for React
// app.use(express.static(path.resolve('./build')));

// Fallback for React Router
app.get("*", (req, res) => {
  // res.sendFile(path.resolve('./build/index.html'));
  
    res.send("Backend server is running!");

}); 

// Connect to MongoDB and start the server
mongoose
  .connect("mongodb+srv://saikiranautomac:jXGLmMQ7RKuO00uP@cluster0.qssqx4c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to database!");
    app.listen(4000,'0.0.0.0', () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.error("Connection failed!", error);
  });
