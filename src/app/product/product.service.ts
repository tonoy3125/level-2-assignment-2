import { TProduct } from './product.interface'
import { Product } from './product.model'

// Ensure text index creation on Product collection
const ensureTextIndex = async () => {
  try {
    await Product.collection.createIndex(
      { name: 'text', description: 'text' },
      { background: true },
    )
  } catch (error) {
    console.error('Error creating text index:', error)
  }
}

// Create Product Service
const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}

// Get Product Service
const getAllProducts = async (searchTerm: unknown) => {
  await ensureTextIndex()
  if (typeof searchTerm === 'string') {
    const result = Product.find({ $text: { $search: searchTerm } })
    return result
  }
  const result = Product.find()
  return result
}

// Get single product
const getProductById = async (id: string) => {
  const result = await Product.findById(id)
  return result
}

// Update Product
const updateProduct = async (id: string, updatedProduct: TProduct) => {
  const result = await Product.findByIdAndUpdate(
    id,
    {
      $set: {
        ...updatedProduct,
      },
    },
    { new: true },
  )
  return result
}

// Delete Single Product
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}

export const productServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
