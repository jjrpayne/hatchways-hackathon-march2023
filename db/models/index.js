const Customer = require('./customer')
const Product = require('./product')
const Order = require('./order')
const OrderItem = require('./orderItem')

Order.belongsTo(Customer, {
  foreignKey: 'customer_id'
})

OrderItem.belongsTo(Order, {
  foreignKey: 'order_id'
})

OrderItem.belongsTo(Product, {
  foreignKey: 'product_id'
})

module.exports = {
  Customer,
  Product,
  Order,
  OrderItem
}
