import mysql from "mysql2/promise"

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Tukai@2002",
    database: "hospital_db"
})

try {
    const connection = await db.getConnection()
    console.log("DB connected successfully")
    connection.release()
} catch (error) {
    console.log("DB connection failed")
    process.exit(1)
}