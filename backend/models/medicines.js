import mongoose from "mongoose";

const MedicineSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    }
});

const Medicine = mongoose.model("Medicine", MedicineSchema);

export default Medicine;