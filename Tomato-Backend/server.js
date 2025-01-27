import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import { foodRouter } from './routes/foodRouter.js';
import path from 'path';

// App configurations
const app = express()
const PORT = 1000;

// Middleware for parsing JSON and form-data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Serve uploaded images statically
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Routes
app.use("/api/food", foodRouter);

// Connecting to the tomato database.
connectDB();

app.get('/', (req, res) => {
    res.send('The API is properly working.')
})

app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`);
})

// mongodb+srv://codeavor:H5lbhqWxoIaQf7SR@tomatocluster.moo5w.mongodb.net/?retryWrites=true&w=majority&appName=TomatoCluster

