import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // ✅ Import user routes

dotenv.config();
connectDB();

const app = express();

// ✅ Increase request body size limit to fix "413 Payload Too Large"
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes); // ✅ User routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
