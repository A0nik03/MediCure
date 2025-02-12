import express from 'express';
import { createEmergencyRequest, deleteEmergencyRequest, getEmergencyRequestById, getEmergencyRequests, updateEmergencyRequest } from '../controllers/controller.emergencyRequest.js';


const router = express.Router();

// @route POST api/emergency
router.post('/add-emergency-request',createEmergencyRequest);
router.get('/get-emergency-requests',getEmergencyRequests);
router.get('/get-emergency-request-ByID',getEmergencyRequestById);
router.delete('/delete-emergency-request-ByID',deleteEmergencyRequest);
router.put('/update-emergency-request-ByID',updateEmergencyRequest);

export default router;
