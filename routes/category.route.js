import express from "express";
import {save, list, remove} from "../controller/category.controller.js"
const router= express.Router();

router.post("/save", save);
router.get("/list", list);
router.post("/remove", remove);

export default router;