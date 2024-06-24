import { Schema, model } from 'mongoose'
import { , TProduct,  } from './product.interface'




const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'description is required'],
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
  },
  category: {
    type: String,
    required: [true, 'category is required'],
  },
  tags: {
    type: [String],
  },
  
})

export const Product = model<TProduct>('Product', productSchema)
