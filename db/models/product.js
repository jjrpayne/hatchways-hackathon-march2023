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
  queryString = 'SELECT a.id, name, stock, stock_warning, max(updatedAt) FROM (SELECT id, name, price, stock, stock_warning FROM products)a INNER JOIN (order_items INNER JOIN orders ON order_items.order_id=orders.id) ON a.id=order_items.product_id WHERE stock <= stock_warning GROUP BY a.id;'
  return db.query(queryString, {
    type: Sequelize.QueryTypes.SELECT
  })
}

module.exports = Product
