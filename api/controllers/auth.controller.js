import User from "./../models/user.models.js";
import bcryptjs from "bcryptjs";
import errorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedpwd = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedpwd });

  try {
    await newUser.save();
    res.json({ message: "signup successful" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const ValidUser = await User.findOne({ email });
    if (!ValidUser) {
      return next(errorHandler(404, "User not found"));
    }

    const ValidPassword = bcryptjs.compareSync(password, ValidUser.password);
    if (!ValidPassword) {
      return next(errorHandler(400, "Invalid credentials"));
    }
    const token = jwt.sign({ id: ValidUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = ValidUser._doc; // seperates password from the Valid user document and renames it as 'pass' and stores everything else under 'rest'

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
