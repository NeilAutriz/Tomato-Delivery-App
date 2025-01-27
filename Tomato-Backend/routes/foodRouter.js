import express from "express";
import multer from "multer";
import path from "path";
import { addFood } from "../controller/foodController.js";

export const foodRouter = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

// Multer middleware with file type filtering
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error("Only images are allowed"), false);
        }
        cb(null, true);
    },
});

// Route for adding food
foodRouter.post("/add", upload.single("image"), addFood);
