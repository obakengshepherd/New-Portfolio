import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  await Contact.create(req.body);
  res.json({ success: true });
});

export default router;
