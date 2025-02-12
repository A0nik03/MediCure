import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import MedicineRoute from './routes/route.medicine.js'
import EmergencyRoute from './routes/route.emergencyRequest.js'
import RareInjectionRoute from './routes/routes.rareInjection.js'
import cors from 'cors';

const app = express();

// Loading environment variables
dotenv.config();

const PORT = process.env.PORT;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Server is Running...');
})

app.use('/api/medicine', MedicineRoute);
app.use('/api/emergency', EmergencyRoute);
app.use('/api/rareInjection', RareInjectionRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
