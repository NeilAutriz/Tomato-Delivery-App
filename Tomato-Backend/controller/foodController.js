import { foodModel } from "../models/foodModel.js";

export const addFood = async (req, res) => {
    try {
        // Check if file upload is successful
        const imageFileName = req.file ? req.file.filename : null;
        if (!imageFileName) {
            return res.status(400).json({
                success: false,
                message: "Image upload failed or no image provided.",
            });
        }

        // Create a new food item
        const newFood = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: imageFileName,
        });

        // Save to the database
        await newFood.save();
        res.status(201).json({ success: true, message: "Successfully added the food." });
    } catch (error) {
        console.error("Error adding food:", error);
        res.status(500).json({ success: false, message: "Failed to add the food." });
    }
};
