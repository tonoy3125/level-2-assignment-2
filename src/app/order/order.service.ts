import { TOrder } from './order.interface'
import { Order } from './order.model'

const createOrder = async (payload: TOrder) => {
  const result = await Order.create(payload)
  return result
}

const getAllOrders = async (email: unknown) => {
  if (typeof email === 'string') {
    const result = await Order.find({ email })
    return result
  }
  const result = await Order.find()
  return result
}

export const orderServices = {
  createOrder,
  getAllOrders,
}
