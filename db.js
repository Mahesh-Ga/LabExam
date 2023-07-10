const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'http://172.17.0.3:7005',
  user: 'root',
  password: 'root',
  database: 'Exam',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

module.exports = pool