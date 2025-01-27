import mongoose from "mongoose";

// Food schema
const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // Image field for storing file name
});

// Export the model
export const foodModel = mongoose.model("foodModel", foodSchema);
