const Sequelize = require('sequelize')
const db = require('../db')

const VOLUME_STRATEGY = 'volume'

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
  if (strategy == VOLUME_STRATEGY){
    orderString = 'SELECT COUNT (*) FROM orders o WHERE o.customer_id = c.id'
  } else {
    // strategy = total
    orderString = 'SELECT SUM (o.total) FROM orders o WHERE o.customer_id = c.id'
  }
  return db.query('SELECT * FROM customers c ORDER BY (' + orderString + ') DESC LIMIT ' + quantity, {
    type: Sequelize.QueryTypes.SELECT
  })
}

module.exports = Customer
