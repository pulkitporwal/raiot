import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    platformEnabled: {
      type: Boolean,
      default: false,
    },
    finePerDay: {
      type: Number,
    },
    attendanceRange: {
      type: Number,
    },
    numberOfWorkingDays: {
      type: Number,
    },
    clubLongitude: {
      type: Number,
    },
    clubLatitude: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const Settings = mongoose.model("Settings", settingsSchema);
