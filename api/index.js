import express from "express";
import mongoose from "mongoose";
import connectDB from "../config/mongoDBconnection.js";

const app = express();

connectDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
