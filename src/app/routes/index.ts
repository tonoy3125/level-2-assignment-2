import express from 'express'
import { productRouter } from '../product/product.route'

const router = express.Router()

const routerModules = [
  {
    path: '/products',
    route: productRouter,
  },
]

export const routes = routerModules.map((item) =>
  router.use(item.path, item.route),
)
