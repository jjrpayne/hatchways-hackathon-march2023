/* eslint-disable no-console */
const fs = require('fs')
const db = require('../db')

const {
  Customer,
  Product,
  Order,
  OrderItem
} = require('../models')

const rawCustomers = fs.readFileSync('db/seed/customer.json')
const rawProducts = fs.readFileSync('db/seed/product.json')
const rawOrders = fs.readFileSync('db/seed/order.json')

const { customers } = JSON.parse(rawCustomers)
const { products } = JSON.parse(rawProducts)
const { orders } = JSON.parse(rawOrders)

async function seed () {
  await db.sync({ force: true })
  console.log('db schema synced!')

  for (const customerToAdd of customers) {
    await Customer.create({
      id: customerToAdd.id,
      name: customerToAdd.name
    })
  }

  for (const productToAdd of products) {
    await Product.create({
      id: productToAdd.id,
      name: productToAdd.name,
      price: productToAdd.price,
      stock: productToAdd.stock,
      stock_warning: productToAdd.stock_warning,
      active: true
    })
  }

  let i = 1
  for (const orderToAdd of orders) {
    await Order.create({
      id: orderToAdd.id,
      customer_id: orderToAdd.customer_id,
      total: orderToAdd.total
    })

    for (const itemToAdd of orderToAdd.items) {
      await OrderItem.create({
        id: i,
        order_id: orderToAdd.id,
        product_id: itemToAdd.product_id,
        quantity: itemToAdd.quantity
      })
      i++
    }
  }
  console.log('seeded product, customers and orders')
}

async function runSeed () {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = { runSeed }
