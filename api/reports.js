const router = require('express').Router()
const { Customer, Product } = require('../db/models')

const methodNotAllowed = (req, res, next) => {
  return res.header('Allow', 'GET').sendStatus(405)
}

const DEFAULT_QUANTITY = 10
const VOLUME_STRATEGY = 'volume'
const TOTAL_STRATEGY = 'total'

const topCustomers = async (req, res, next) => {
  try {
    const quantity = req.query.qty || DEFAULT_QUANTITY
    const strategy = req.query.strategy || VOLUME_STRATEGY
    if (!quantity || quantity == 0) { throw new Error('Please provide a proper quantity') }
    if (![VOLUME_STRATEGY, TOTAL_STRATEGY].includes(strategy)) { throw new Error('Please provide a proper strategy') }

    const dbTopCustomers = await Customer.getTopCustomers(quantity, strategy)
    const customersToReturn = dbTopCustomers.map(customer => {
      return {
        id: customer.id,
        name: customer.name
      }
    })
    return res.json(customersToReturn)
  } catch (err) {
    const error = { message: err.message, stack: err.stack }
    res.status(400)
    return res.json(error)
  }
}

const stockWarning = async (req, res, next) => {
  try {
    const dbStockWarning = await Product.getStockWarningProducts()
    const productsToReturn = dbStockWarning.map(product => {
      return {
        id: product.id,
        name: product.name,
        stock: product.stock,
        stock_warning: product.stock_warning,
        last_sold: product["max(updatedAt)"]
      }
    })
    return res.json({products: productsToReturn})
  } catch (err) {
    const error = {message: err.message, stack: err.stack }
    res.status(400)
    return res.json(error)
  }
}

router.route('/topCustomers').get(topCustomers).all(methodNotAllowed)
router.route('/stockWarning').get(stockWarning).all(methodNotAllowed)

module.exports = router
