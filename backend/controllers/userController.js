import User from "../models/User.js";

//  Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
};

//  Update User Profile (Supports name, position, location & profilePic)
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    //  Update user fields if provided
    user.name = req.body.name || user.name;
    user.position = req.body.position || user.position; //  Added position
    user.location = req.body.location || user.location; //  Added location
    user.profilePic = req.body.profilePic || user.profilePic;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating profile" });
  }
};
