import { TProduct } from './product.interface'
import { Product } from './product.model'

// Create Product Service
const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}

// Get Product Service
const getAllProducts = async (searchTerm: unknown) => {
  if (typeof searchTerm === 'string') {
    const result = Product.find({ $text: { $search: searchTerm } })
    return result
  }
  const result = Product.find()
  return result
}

export const productServices = {
  createProduct,
  getAllProducts,
}
