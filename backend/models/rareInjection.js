import mongoose from "mongoose";

const RareInjectionAssistanceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    urgency: {
        type: String,
        enum: ["Low", "Medium", "High"],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
});

const RareInjectionAssistance = mongoose.model("RareInjectionAssistance", RareInjectionAssistanceSchema);

export default RareInjectionAssistance;