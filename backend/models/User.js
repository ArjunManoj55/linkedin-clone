import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    position: { type: String, default: "Frontend Developer" }, // ✅ Added position
    location: { type: String, default: "" }, // ✅ Added location
    profilePic: { type: String, default: "" }, // ✅ Added profile picture
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
