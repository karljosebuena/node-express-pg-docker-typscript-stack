
import express, { Request, Response } from 'express'
import db from 'db'

const PORT = process.env.PORT || 3001

const app = express()

app.get('/', async (req: Request, res: Response) => {
  const {
    rows: users
  } = await db.getUsers();
  res.send(users)
})

app.listen(PORT, () => {
  console.log(`app runnin on port ${PORT}`)
  db.runMigrations()
})