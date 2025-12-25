import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Contact", ContactSchema);
