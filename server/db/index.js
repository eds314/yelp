//importing the pg libraryu
const { Pool } = require('pg')
// creating a new pool that connects to postgres
const pool = new Pool()
//exporting query object
module.exports = {
  query: (text, params) => pool.query(text, params),
}