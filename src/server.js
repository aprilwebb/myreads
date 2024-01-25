import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "process.env.SESSION_SECRET",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/myReadsDB");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.status(200).send("App is working");
});

app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      res.send(req.body);
      console.log(result);
    } else {
      console.log("User already registered");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
