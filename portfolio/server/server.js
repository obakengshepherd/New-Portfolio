import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import { connectDB } from "./db.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
// Accept URL-encoded form submissions from plain HTML forms
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contactRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
