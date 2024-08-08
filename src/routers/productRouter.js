import express from 'express'
const router = express.Router()

import allProducts from '../controllers/products/allProducts.js'
import productById from '../controllers/products/productById.js'
import createProduct from '../controllers/products/createProduct.js'
import editProduct from '../controllers/products/editProduct.js'
import changeNameProduct from '../controllers/products/changeNameProduct.js'
import deleteProduct from '../controllers/products/deleteProduct.js'

router.get('/', productById)
router.get('/all', allProducts)

router.post('/create', createProduct)

router.put('/edit', editProduct)

router.patch('/changeName', changeNameProduct)

router.delete('/delete', deleteProduct)

export default router