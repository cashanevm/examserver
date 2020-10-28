const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-247-79-178.eu-west-1.compute.amazonaws.com',
  database: 'd4am615tqn7fq3',
  user:'ugrhebsleflarf',
  password: 'b1a58307a65281150d163559af0d8b3ede580b24952c424cbb738d5d48778699',
  port: 5432,
  ssl:{rejectUnauthorized: false}
}) 
const getUsers = (request, response) => {
  pool.query('SELECT * FROM table_sample', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM table_sample WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}