import pool from '../sql_db/db.js';

const getAmountOfClassicCar = async (res,req)=>{
    const [rows] = await pool.query("SELECT productLine = ? AS classic cars FROM `products` WHERE quantityInStock > 0",['Classic Cars'])
    res.json(rows);
}
export default getAmountOfClassicCar;