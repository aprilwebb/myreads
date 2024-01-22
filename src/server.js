import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

async function main() {
  await mongoose.connect("mongodb://localhost:27017/myreadsDB");

  const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    secret: String,
  });

  userSchema.plugin(passportLocalMongoose);
  userSchema.plugin(findOrCreate);

  const User = new mongoose.model("User", userSchema);
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
