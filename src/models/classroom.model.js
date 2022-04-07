import mongoose from "mongoose";

export const classroomSchema = new mongoose.Schema(
    {
        classroomName: { type: String, required: true },
        reference: { type: String, required: false },
        schedule: [
            {
                day: { type: String, required: true },
                courses: [
                    {
                        hour: { type: String, required: true },
                        description: { type: String, required: false },
                        name: { type: String, required: true },
                        hosts: [{ type: String, required: true }],
                    },
                ],
            },
        ],
    },
    { timestamps: true }
);

const classroomModel = mongoose.model("classroom", classroomSchema);

export default classroomModel;
