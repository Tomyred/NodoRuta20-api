import mongoose from "mongoose";

export const linkSchema = new mongoose.Schema(
    {
        group: { type: String, required: true },
        title: { type: String, required: true },
        color: { type: String, required: true, default: "#2196f3" },
        description: { type: String, required: false },
        url: { type: String, required: true },
    },
    { timestamps: true }
);

const linkModel = mongoose.model("Link", linkSchema);

export default linkModel;
