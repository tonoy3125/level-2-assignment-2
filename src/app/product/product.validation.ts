import { z } from 'zod'



export const productValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(1, 'Prize is required'),
  category: z.string().min(1, 'Category is required'),
  tags: z.string().array(),
  
})

export const productValidationSchemaForUpdate =
  productValidationSchema.partial()
