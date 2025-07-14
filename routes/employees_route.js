import { Router } from "express";
import getEmployeesByReportName from "../ctrl/employees_ctrl.js";

const router = Router();

router.get('/get/firstName/lastName/byReportNum',getEmployeesByReportName)

export default router;

