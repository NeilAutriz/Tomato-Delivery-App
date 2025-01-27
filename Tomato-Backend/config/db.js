import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://codeavor:H5lbhqWxoIaQf7SR@tomatocluster.moo5w.mongodb.net/?retryWrites=true&w=majority&appName=TomatoCluster').then(()=>console.log('Successfully connected to the Tomato Database.'))
} 