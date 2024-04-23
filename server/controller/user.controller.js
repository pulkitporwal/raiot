import { User } from "../model/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const updateInformation = async (req, res) => {
  try {
    const { fullName } = req.body;

    const user = await User.findOne({ userName: req.userData.userName });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    let avatarURL = user.avatar; // Initialize with the current avatar URL

    if (req.files && req.files["avatar"]) {
      const avatar = req.files["avatar"][0].path;
      avatarURL = await uploadOnCloudinary(avatar);
    }

    user.fullName = fullName;
    user.avatar = avatarURL;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "User Updated successfully",
      updatedUser: user,
    });
  } catch (error) {
    console.error("Error while updating user information:\n", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const fetchMembers = async (req, res) => {
  try {
    if (
      req.userData.userType !== "Super Admin" &&
      req.userData.userType !== "Admin" &&
      req.userData.userType !== "Developer"
    ) {
      return res.status(403).json({
        success: false,
        message: "You don't have authority to edit the settings",
      });
    }

    let members;
    if (
      req.userData.userType === "Super Admin" ||
      req.userData.userType === "Admin"
    ) {
      members = await User.find({
        userType: { $nin: ["Super Admin", "Developer"] },
      }).select("-password");
    } else {
      members = await User.find({}).select("-password");
    }

    return res.status(200).json({
      success: true,
      message: "Members Fetched Successfully",
      members,
    });
  } catch (error) {
    console.error("Error while fetching members:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateMembers = async (req, res) => {
  try {
    const updatedMembers = req.body;

    const updatePromises = updatedMembers.map(async (member) => {
      const newMember = await User.findByIdAndUpdate(
        member._id,
        { $set: member },
        { new: true }
      );
      console.log("newMember", newMember);
      return newMember;
    });

    const updatedMembersResults = await Promise.all(updatePromises);

    return res.status(200).json({
      success: true,
      message: "Members Updated Successfully",
      updatedMembers: updatedMembersResults,
    });
  } catch (error) {
    console.error("Error while updating members:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
