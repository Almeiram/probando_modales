import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host:"localhost",
    database:"modales",
    user:"mariaalmeira",
    password:"Ma123456789@",
    connectionLimit: 10,
    waitForConnections: true,   
    queueLimit: 0 
});

async function conection() {
    try{
        const conection = await pool.getConnection();
        console.log("conexion establecida")
        conection.release();
    }catch(error){
        console.error("error de conexion", error.message)

    }
}