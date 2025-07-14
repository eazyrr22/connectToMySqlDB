import pool from '../sql_db/db.js';

const getCustomersByCity = async (req, res) => {
    let city ='france'
    
 try {
        const [sumOfFrenchCustomers] = await pool.query("SELECT COUNT(*) FROM customers WHERE country = ?",[city])
         res.json(sumOfFrenchCustomers)
 } catch (error) {
    console.log(`error from getCustomersByCity${error} `);
    
 }
    }
    export default getCustomersByCity;