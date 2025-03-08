import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import MedicineRoute from './routes/route.medicine.js'
import EmergencyRoute from './routes/route.emergencyRequest.js'
import RareInjectionRoute from './routes/routes.rareInjection.js'
import cors from 'cors';
import path from 'path'

const app = express();

// Loading environment variables
dotenv.config();
const PORT = process.env.PORT;


// Connect to MongoDB
connectDB();

const __dirname = path.resolve();

// Middleware
app.use(cors({
    origin: "http://locahost:5173"
}));
app.use(express.json({limit: '20mb'}));

// Routes

app.use('/api/medicine', MedicineRoute);
app.use('/api/emergency', EmergencyRoute);
app.use('/api/rareInjection', RareInjectionRoute);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')))
}
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
