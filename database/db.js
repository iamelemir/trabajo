const Pool = require("pg").Pool;

const pool = new Pool({
    user:"elemir",
    password:"1q2w3e4r",
    port:5432,
    database:"educacion"
});

module.exports = pool;