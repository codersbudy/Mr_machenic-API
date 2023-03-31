import express from 'express';
import { signUp,signIn,updataPhoto ,updateEmail,getList,id} from '../controller/shopkeeper.controller.js';
import { body } from "express-validator";
import { verifyToken } from '../middleware/verification.js';
const router=express.Router();

router.post("/signUp",
body("shopkeeperName").notEmpty(),
body("contact","Invalid contact number").isLength({
    min:10,
    max:10,
}),
body("contact","only digit is allow").isNumeric(),
body("password","please enter password").notEmpty(),
body("password","password must have minimum 8 later and maximum 16 later").isLength({min:8,
max:16}),
body("aadharNo","only digit allow").isNumeric(),
body("aadharNo","enter aadhar number").notEmpty(),
body("aadharNo","enter 12 digit aadhar number").isLength({min:12,
max:12}),
signUp);


router.post("/signIn",signIn);
router.post("/updatePhoto",verifyToken,updataPhoto);
router.post("/updateEmail",verifyToken,updateEmail);
router.get("/getList",verifyToken,getList);
router.post("/id/:shopeeperId",verifyToken,id);
// router.get("/signOut",signOut);
// router.post("/forgotPassword",
// body("email","not valid email id").isEmail(),
// body("password","please enter password").notEmpty(),
// body("password","password must have minimum 8 later and maximum 16 later").isLength({min:8,
// max:16}),
// forgotPassword);

export default router;