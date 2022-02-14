import mongoose from "mongoose";

export const schema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        color: { type: String, required: true, default: "#2196f3" },
        description: { type: String, required: false },
        url: { type: String, required: true },
    },
    { timestamps: true }
);
