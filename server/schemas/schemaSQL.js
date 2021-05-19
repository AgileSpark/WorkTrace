// Require in Pool and dotenv and invoke the config method for dotenv
const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config()

// Reference the database connection string from .env
const {PG_URI} = process.env;

// Create a new pool of connections for the SQL database
const pool = new Pool ({
  connectionString: PG_URI
});

// Export the query
module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback)
}