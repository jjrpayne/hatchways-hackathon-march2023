const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stock_warning: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, { timestamps: true })

Product.getStockWarningProducts = async function () {
  // TODO Modify this function for querying the database to get the products with stock_warning.
  return [
    {
      id: 1,
      name: 'Blue T-Shirt',
      stock: 1,
      stock_warning: 2,
      last_sold: '2022-02-01'
    }
  ]
}

module.exports = Product
