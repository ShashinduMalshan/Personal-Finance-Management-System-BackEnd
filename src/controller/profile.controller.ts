// import { Response } from "express";
// import bcrypt from "bcryptjs";
// import { User } from "../models/User";
// import { AuthRequest } from "../middleware/auth";

// export const getUserProfile = async (req: AuthRequest, res: Response) => {
//   try {
//     const user = await User.findById(req.user).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json(user);
//   } catch {
//     res.status(500).json({ message: "Failed to fetch profile" });
//   }
// };


// export const updateUserProfile = async (req: AuthRequest, res: Response) => {
//   try {
//     const { username, email, phone } = req.body;

//     const updatedUser = await User.findByIdAndUpdate(
//       req.user,
//       { username, email, phone },
//       { new: true }
//     ).select("-password");

//     res.status(200).json(updatedUser);
//   } catch {
//     res.status(500).json({ message: "Profile update failed" });
//   }
// };

// export const updatePassword = async (req: AuthRequest, res: Response) => {
//   try {
//     const { currentPassword, newPassword } = req.body;

//     const user = await User.findById(req.user);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Current password incorrect" });
//     }

//     user.password = await bcrypt.hash(newPassword, 10);
//     await user.save();

//     res.status(200).json({ message: "Password updated successfully" });
//   } catch {
//     res.status(500).json({ message: "Password update failed" });
//   }
// };
// // 