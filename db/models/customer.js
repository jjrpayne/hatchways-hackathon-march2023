const Sequelize = require('sequelize')
const db = require('../db')

const Customer = db.define('customer', {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: true })

Customer.getTopCustomers = async function (quantity, strategy) {
  // TODO Modify this query for getting the TOP Customers
  if (strategy == 'volume'){
    queryString = 'SELECT * FROM customers c ORDER BY (SELECT COUNT (*) FROM orders o WHERE o.customer_id = c.id) DESC LIMIT ' + quantity
  } else {
    queryString = 'SELECT * FROM customers'
  }
  return db.query(queryString, {
    type: Sequelize.QueryTypes.SELECT
  })
}

module.exports = Customer
