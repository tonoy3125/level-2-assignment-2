import { z } from 'zod'



const variantsValidationSchema = z.object({
  type: z.string().min(1, 'type is required'),
  value: z.string().min(1, 'value is required'),
})

export const productValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(1, 'Prize is required'),
  category: z.string().min(1, 'Category is required'),
  tags: z.string().array(),
  variants: z.array(variantsValidationSchema).min(1, 'varitants are required'),
  
})

export const productValidationSchemaForUpdate =
  productValidationSchema.partial()
