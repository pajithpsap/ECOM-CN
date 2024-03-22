
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import productrouter from './src/product/routes/productRoutes.js';

// Initialize Express app
const app = express();

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://pajithpsap:$Ajithpriya$4@cluster0.vako5wm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Use product routes
app.use('/api', productrouter);
app.get("/", (req, res) => {
  res.send("Welcome to ECOM APIs");
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
