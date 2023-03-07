import mysql from 'promise-mysql'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    mysql.createPool({
      host: '35.187.248.206',
      port: 3306,
      user: 'nomnom',
      password: 'XK.imPBs`c4)(vv['
    }).then((pool) => {
      pool.getConnection().then((connection) => {
        connection.query('SELECT * FROM nomnom.folders').then((rows) => {
          res.json(rows)
        })
      })
    })
    
    // pool.getConnection().then((connection) => {
    //   connection.query('SELECT * FROM nomnom.folders').then((rows) => {
    //     res.json(rows)
    //   })
    // })
  }
}