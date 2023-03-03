const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
}, { timestamps: true })

module.exports = Order
