import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { routes } from './app/routes'
const app: Application = express()
// const port = 3000;

// parser
app.use(express.json())
app.use(cors())

// routers

app.use('/api', routes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.all('*', (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
  next()
})

export default app
