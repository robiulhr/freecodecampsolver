import express from "express";
import bodyParser from "body-parser";
import loginController from "./controllers/auth/login.js";
import env from "dotenv";
import getUserController from "./controllers/user/getUser.js";
import isAuthenticated from "./middlewares/isAuthenticated.js";
import getAllCoursesController from "./controllers/courses/getAllCourses.js";
import fetchChallengesController from "./controllers/devControllers/fetchChallengesController.js";
env.config();

const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world.");
});
// ========== all routes
// get user data
app.get("/user", isAuthenticated, getUserController);

// delete user
app.delete("user",(req,res)=>{})


// get all courses data
app.get("/courses",isAuthenticated, getAllCoursesController);

// get single course data
app.get("/courses/:id", (req, res) => {});

// complete challenge
app.post("/completechallenge/", (req, res) => {});

// login the user getting the data from freecodecamp server and saving it on the server
app.post("/login", loginController);


/**
 * routes for development purpose only
 * must be passed the development passkey as the authorization key.
 */

app.get("/fetchallchallenges",fetchChallengesController);

// Catch-all route for handling undefined routes
app.all("*", (req, res) => {
  res.status(404).send({
    message:
      "404 Not Found: The requested resource was not found on this server.",
  });
});

// global error handler
app.use(function (err, req, res, next) {
  res
    .status(err.status || 500)
    .send({ message: err.message, stack: err.stack });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
