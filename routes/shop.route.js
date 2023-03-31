import express from 'express';
// import { id } from '../controller/customer.controller.js';
import { remove,save,getList ,id,update,updateStatus} from '../controller/shop.controller.js';
import { verifyToken } from '../middleware/verification.js';
const router=express.Router();

router.post("/save",verifyToken,save);
router.get("/remove/:shopId",verifyToken,remove);
router.get("/getList",verifyToken,getList);
router.get("/id/:shopId",verifyToken,id);
router.post("/update",verifyToken,update);
router.get("/updateStatus",verifyToken,updateStatus)
export default router;