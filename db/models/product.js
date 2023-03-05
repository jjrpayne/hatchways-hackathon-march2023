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
  // from part 3: "In this assessment, we’re assuming that every time an order is created with an item, the product stock is updated."
  // so we can just use the updatedAt column as a last sold timestamp
  queryString = 'SELECT id, name, stock, stock_warning, updatedAt FROM products WHERE stock <= stock_warning;'
  return db.query(queryString, {
    type: Sequelize.QueryTypes.SELECT
  })
}

module.exports = Product
