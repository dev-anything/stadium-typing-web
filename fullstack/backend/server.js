const express = require('express')
const mysql = require('mysql2/promise')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())


const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
})


app.get("/api/league", async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT id, league_name, country_code, league_code FROM league`
    )
    res.json(rows)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e.message })
  }
})


app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`)
})