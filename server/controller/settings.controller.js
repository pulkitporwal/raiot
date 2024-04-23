import { Settings } from "../model/settings.model.js";

export const editSetting = async (req, res) => {
  try {
    const { attendanceRange, clubLatitude,clubLongitude } = req.body;
    console.log(req.userData.userType);

    if (
      !(
        req.userData.userType == "Super Admin" ||
        req.userData.userType == "Developer"
      )
    ) {
      return res.status(403).json({
        success: false,
        message: "You don't have authority to edit the settings",
      });
    }

    const existingSettings = await Settings.findOne({});

    existingSettings.attendanceRange = attendanceRange;
    existingSettings.clubLongitude = clubLongitude;
    existingSettings.clubLatitude = clubLatitude;

    const updatedSettings = await existingSettings.save();

    return res.status(200).json({
      success: true,
      message: "Settings updated successfully",
      updatedSettings,
    });
  } catch (error) {
    console.error("Error while editing settings:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const fetchSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne({});
    if (!settings) {
      return res.status(404).json({
        success: false,
        message: "Settings not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Settings fetched successfully",
      settings,
    });
  } catch (error) {
    console.error("Error while fetching settings:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const createSettings = async (req, res) => {
  try {
    const {
      platformEnabled,
      finePerDay,
      attendanceRange,
      numberOfWorkingDays,
    } = req.body;

    const newSettings = await Settings.create({
      platformEnabled,
      finePerDay,
      attendanceRange,
      numberOfWorkingDays,
    });
  } catch (error) {
    console.error("Error while creating new settings:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
