import { allProducts } from "../../models/productModel.js"

const getProducts = async (req, res) => {
    const products = await allProducts()
    
    res.json({ products })
}

export default getProducts