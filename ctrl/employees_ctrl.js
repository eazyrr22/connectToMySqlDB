import pool from '../sql_db/db.js';

const getEmployeesByReportName = async (req, res) => {
    
    const [rows] = await pool.query('SELECT first_name, last_name FROM employees WHERE manager_id = ?', [1143])
    res.json(rows)
 
 }
    
    export default getEmployeesByReportName;