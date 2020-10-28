require('dotenv').config()

const PORT = process.env.PORT

// Baza podataka
const password = process.env.ATLAS_PASS
const dbname = 'poruke-api'
const DB_URI = `mongodb+srv://IlvaVugdelija:${password}@cluster0.7izm9.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = {PORT, DB_URI}