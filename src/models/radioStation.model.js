import mongoose from "mongoose";

export const radioStationSchema = new mongoose.Schema(
    {
        stationName: { type: String, required: true },
        reference: { type: String, required: false },
        schedule: [
            {
                day: { type: String, required: true },
                broadcasts: [
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

const radioStationModel = mongoose.model("RadioStation", radioStationSchema);

export default radioStationModel;
