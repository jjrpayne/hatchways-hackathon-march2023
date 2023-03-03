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
  return db.query('SELECT * FROM customers', {
    type: Sequelize.QueryTypes.SELECT
  })
}

module.exports = Customer
