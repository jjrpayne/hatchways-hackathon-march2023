const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('order_item', {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    primaryKey: true
  }
}, { timestamps: false })

module.exports = OrderItem
