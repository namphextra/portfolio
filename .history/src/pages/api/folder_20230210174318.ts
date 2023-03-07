import mysql from 'promise-mysql'

export default function handler(req, res) {
  if (req.method === 'GET') {
    const pool = mysql.createPool({
      host: '35.187.248.206',
      port: 3306,
      user: 'nomnom',
      password: 'XK.imPBs`c4)(vv['
    })
    pool().then((connection) => {
      connection.query('SELECT * FROM nomnom.folders').then((rows) => {
        res.json(rows)
      })
    }
  }
}