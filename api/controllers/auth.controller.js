import User from "./../models/user.models.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedpwd = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedpwd });

  try {
    await newUser.save();
    res.json({ message: "signup successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
