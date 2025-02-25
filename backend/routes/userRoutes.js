//user must be longed in to view or update their profile.

import express from "express";
import { getUserProfile, updateUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, getUserProfile); //  Get Profile
router.put("/update", protect, updateUserProfile); //  Update Profile

export default router;
