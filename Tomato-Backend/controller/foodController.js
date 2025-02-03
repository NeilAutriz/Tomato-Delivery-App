import { foodModel } from '../models/foodModel.js'
import fs from 'fs';

export const addFood = async(req, res) => {
    try{
        let imageFileName = req.file.filename
        const createdFood = new foodModel({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            price: req.body.price,
            image: imageFileName
        })
        await createdFood.save();
        res.status(201).json({success: true,message: 'Successfully created the food item.'});
        console.log(`Uploaded image: ${req.file.filename}`);
    } catch (error){
        console.log(error.message);
        res.status(500).json({success: false,message: 'Failed in creating new food item.'})
    }
}

export const deleteFood = async (req, res) => {
    try{
        const foundFood = await foodModel.findById(req.body.id);
        console.log(`/uploads/images/${foundFood.image}`);
        fs.unlink(`/uploads/images/${foundFood.image}`, () => {});
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Successfully deleted the food item."})
    } catch (error){
        console.log('Error detected in deleting food: ', error.message);
        res.json({success: false, message: "Error in deleting food item."})
    }
}

export const findFoodList = async (req, res) => {
    try{
        const foundFoodList = await foodModel.find({});
        console.log('Successfully found food items.');
        res.json({success: true, data: foundFoodList});
    }catch (error){
        console.log('Error in finding food items', error.message);
    }
}