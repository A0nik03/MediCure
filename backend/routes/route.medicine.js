import express from 'express';
import { AddMedicine, GetMedicineById, GetMedicines } from '../controllers/controller.medicine.js';

const router = express.Router();

// @route POST api/medicine

router.post('/add-medicine',AddMedicine);
router.get('/get-medicines',GetMedicines);
router.get('/get-medicine/:id', GetMedicineById);

export default router;
