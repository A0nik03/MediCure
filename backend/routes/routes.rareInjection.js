import express from 'express';
import { createRareInjection, getRareInjectionById, getRareInjections } from '../controllers/controller.rareInjection.js';

const router = express.Router();

router.post('/add-rare-injection',createRareInjection);
router.get('/get-rare-injection',getRareInjections);
router.get('/get-rare-injection/:id',getRareInjectionById);


export default router;