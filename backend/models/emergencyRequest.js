import mongoose from "mongoose";

const EmergencyRequestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Low",
    },
    contact: {
        type: String,
        required: true,
    }
})

const EmergencyRequest = mongoose.model('EmergencyRequest', EmergencyRequestSchema);

export default EmergencyRequest;