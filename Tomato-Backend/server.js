import express from 'express'
import { connectDB } from './config/db.js';
import { foodRouter } from './routes/foodRouter.js';

// App configurations
const app = express()
const PORT = 1000;

// Middleware for parsing JSON and form-data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads/images'));

// Connecting to the tomato database.
connectDB();

app.get('/', (req, res) => {
    res.send('The API is properly working.')
})

app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`);
})


