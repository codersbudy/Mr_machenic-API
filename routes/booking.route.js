import express from 'express';
const router=express.Router();
import { request } from '../controller/booking.controller.js';
import { body } from 'express-validator';
import { verifyToken } from '../middleware/verification.js';
router.post("/request",verifyToken,request);


export default router;