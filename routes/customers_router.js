import { Router } from "express";
import getCustomersByCity from "../ctrl/customers_ctrl.js";

const router = Router();

router.get('/getByCity',getCustomersByCity)

export default router;

