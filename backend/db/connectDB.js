//Conexion base de datos
const mysql = require('mysql2/promise')

const dbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  timezone: "local"
}

let pool

async function getPool() {
  if(!pool){
    pool = await mysql.createPool(dbConfig)
  }
  
  return pool
}

module.exports = getPool

