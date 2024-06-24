import { Request, Response } from 'express'
import { productValidationSchema } from './product.validation'
import { productServices } from './product.service'
import sendResponse from '../utils/sendResponse'
import httpStatus from 'http-status'

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const product = productValidationSchema.parse(data)

    const result = await productServices.createProduct(product)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product Created Succesfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

export const productControllers = {
  createProduct,
}
