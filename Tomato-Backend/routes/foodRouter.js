import express from 'express';
import multer from 'multer';
import { addFood, deleteFood, findFoodList } from '../controller/foodController.js';
import path from 'path';

export const foodRouter = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: "./uploads/images", // Destination folder for uploaded images
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage: storage });

// Routes and actions of the food router.
foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/food-list', findFoodList);
foodRouter.post('/remove', deleteFood);