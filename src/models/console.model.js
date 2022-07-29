import mongoose from "mongoose";

export const consoleSchema = new mongoose.Schema(
    {
        group: { type: String, required: true },
        consoleName: { type: String, required: true },
        links: [
            {
                color: { type: String, required: true, default: "#2196f3" },
                description: { type: String, required: false },
                title: { type: String, required: true },
                url: { type: String, required: true },
            },
        ],
    },
    { timestamps: true }
);

const consoleModel = mongoose.model("Console", consoleSchema);

export default consoleModel;
