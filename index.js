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
const customerRoutes = require("./Routes/route.customer");
const userRoute = require("./Routes/route.login"); // Ensure this path is correct
const app = express();
const path = require('path')

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Define CORS options
const corsOptions = {
  origin: ["http://localhost:3000", "http://192.168.29.68:3000"],
  credentials: true, // Enable credentials
};

app.use(cors(corsOptions));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } 
}));
 
// Routes
app.use("/hms", customerRoutes);
app.use("/hms", userRoute); 

// app.get("/", (req, res) => {
//   res.send("Hello from Node API Server Updated");
// });



// Connect to MongoDB
mongoose
  .connect("mongodb+srv://saikiranautomac:jXGLmMQ7RKuO00uP@cluster0.qssqx4c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to database!");
    app.listen(80, 'hms.automactechonoligies.in' , () => {
      console.log("Server is running on port 80");
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });


  app.use(express.static(path.resolve('./build')))

app.get("*",(req,res)=>{
  res.sendFile(path.resolve(path.resolve('./build/index.html')))
})



// recconect?