import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
// const port = 3000;

// parser
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  // let b;

  const a = 10
  res.send(a)
})

// console.log(process.cwd());

export default app
