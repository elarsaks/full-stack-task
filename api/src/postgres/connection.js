const pgPromise = require('pg-promise')

// Catch undefined environment variable
function undefinedVariable(name) {
    console.error(`Environment variable ${name} needs to be specified`)
    console.error('Exiting...')
    process.exit(1)
  }

// Postgres Connection
const pgp = pgPromise()
const db = pgp({
    host: process.env.POSTGRES_HOST || undefinedVariable('POSTGRES_HOST'),
    port: process.env.POSTGRES_PORT || undefinedVariable('POSTGRES_PORT'),
    database: process.env.POSTGRES_URL || undefinedVariable('POSTGRES_URL'),
    user: process.env.POSTGRES_USERNAME || undefinedVariable('POSTGRES_USERNAME'),
    password: process.env.POSTGRES_PASSWORD || undefinedVariable('POSTGRES_PASSWORD'),
})

/* DEBUG
console.log("DATABASE CONNECTION DETAILS: \n" +
   "HOST: " + process.env.POSTGRES_HOST + "\n",
   "PORT: " + process.env.POSTGRES_PORT + "\n",
   "URL: " +process.env.POSTGRES_URL + "\n",
   "USERNAME: " +process.env.POSTGRES_USERNAME + "\n",
   "PASSWORD: " +process.env.POSTGRES_PASSWORD + "\n"
) */

// Return empty array if no data was returned
function handleEmptyError(error) {
    if (
        error instanceof pgp.errors.QueryResultError &&
        error.code === pgp.errors.queryResultErrorCode.noData
    ) {
        // Handle no data from database, return empty array
        return []
    } else {
        // Pass on the error
        throw error
    }
}

// Test connection
db.connect()
    .then(function (obj) {
        obj.done(); // success, release connection;
    })
    .catch(function (error) {
        console.log("ERROR:", error.message);
    });

module.exports = {db, handleEmptyError}
