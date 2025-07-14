import { Router } from "express";
import getAmoutOfClassicCar from '../ctrl/products_ctrl.js';
import pool from "../sql_db/db.js";


const router = Router();

router.get("/productLine/ClassicCars/getAmount",getAmoutOfClassicCar)

export default router;