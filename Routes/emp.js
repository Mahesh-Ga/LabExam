const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (request, response) => {
  const statement = `SELECT * FROM Employee_Tb`
  db.query(statement, (error, data) => {
    if (error) {
      response.send(error)
    } else {
      response.send(data)
    }
  })
})

router.post('/',(request ,response) => {
    const statement = `INSERT INTO Employee_Tb( e_name , email, password , emp_id ,dname , doj) VALUES('${request.body.e_name}','${request.body.email}','${request.body.password}',${request.body.emp_id}, '${request.body.dname}','${request.body.doj}') `
    db.query(statement, (error, data) => {
      if (error) {
        response.send(error)
      } else {
        response.send(data)
      }
    })
})


router.delete('/:id',(request ,response) => {
    const statement = `DELETE FROM Employee_Tb WHERE id = '${request.params.id}'`
    db.query(statement, (error, data) => {
      if (error) {
        response.send(error)
      } else {
        response.send(data)
      }
    })
})

router.put('/:id',(request ,response) => {
    const statement = `UPDATE Employee_Tb SET dname = '${request.body.dname}', doj = '${request.body.doj}' WHERE id = ${request.params.id}`
    db.query(statement, (error, data) => {
      if (error) {
        response.send(error)
      } else {
        response.send(data)
      }
    })
})

module.exports = router
