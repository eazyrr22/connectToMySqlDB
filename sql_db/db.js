import {config}from 'dotenv';
import mysql from 'mysql2/promise';

config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,    
    user: process.env.DB_USER,
    password: '',
    database: 'classicmodels'
});


export default pool;