import { Event } from "../model/event.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const addEvent = async (req, res) => {
  try {
    const {
      eventName,
      eventDescription,
      eventDetail,
      prize,
      location,
      expireOn,
      attachedDocument,
    } = req.body;

    if (
      !(
        req.userData.userType === "Super Admin" ||
        req.userData.userType === "Admin" ||
        req.userData.userType === "Developer"
      )
    ) {
      return res.status(403).json({
        success: false,
        message: "You don't have authority to add events",
      });
    }
    // console.log(eventName)
    // console.log(eventDescription)
    // console.log(eventDetail)
    // console.log(attachedDocument)
    // console.log(prize)
    // console.log(location)
    // console.log(expireOn)
    // console.log(req.files["thumbnail"]);
    // console.log(req.files["banner"]);
	
    if (
      !(
        eventName &&
        eventDescription &&
        eventDetail &&
        prize &&
        expireOn &&
        location &&
        attachedDocument &&
        req.files["thumbnail"] &&
        req.files["banner"]
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required, including files",
      });
    }

    const thumbnail = req.files["thumbnail"][0].path;
    const banner = req.files["banner"][0].path;

    const thumbnailURL = await uploadOnCloudinary(thumbnail);
    const bannerURL = await uploadOnCloudinary(banner);

    const newEvent = await Event.create({
      eventName,
      eventDescription,
      eventDetail,
      expireOn,
      thumbnail: thumbnailURL,
      banner: bannerURL,
      prize,
      location,
      attachedDocument,
    });

    return res.status(200).json({
      success: true,
      message: "Event added successfully",
      event: newEvent,
    });
  } catch (error) {
    console.error("Error while adding event:\n", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const markComplete = async (req, res) => {
  try {
    const { eventId } = req.body;

    if (
      !(
        req.userData.userType === "Super Admin" ||
        req.userData.userType === "Admin" ||
        req.userData.userType === "Developer"
      )
    ) {
      return res.status(403).json({
        success: false,
        message: "You don't have authority to add events",
      });
    }

    if (!eventId) {
      return res.status(500).json({
        success: false,
        message: "All fields are required",
      });
    }

    const eventDetails = await Event.findById(eventId);

    if (!eventDetails) {
      return res.status(500).json({
        success: false,
        message: "No Event Exist in Correspond to given Event ID",
      });
    }

    eventDetails.isCompleted = true;

    eventDetails.save();

    return res.status(200).json({
      success: true,
      message: "Event marked as complete successfully",
    });
  } catch (error) {
    console.error("Error while marking event complete:\n", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const removeEvent = async (req, res) => {
  try {
    const { eventId } = req.body;

    console.log(req.userData);

    if (
      !(
        req.userData.userType === "Super Admin" ||
        req.userData.userType === "Admin" ||
        req.userData.userType === "Developer"
      )
    ) {
      return res.status(403).json({
        success: false,
        message: "You don't have authority to add events",
      });
    }

    if (!eventId) {
      return res.status(500).json({
        success: false,
        message: "All fields are required",
      });
    }

    const eventDetails = await Event.findOneAndDelete({ _id: eventId });

    if (!eventDetails) {
      return res.status(500).json({
        success: false,
        message: "No Event Exist in Correspond to given Event ID",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Event removed successfully",
    });
  } catch (error) {
    console.error("Error while removing event:\n", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const eventData = await Event.find({ isCompleted: false });

    return res.status(500).json({
      success: true,
      message: "Events Fetched Successfully",
      eventData,
    });
  } catch (error) {
    console.error("Error while getting all events:\n", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
