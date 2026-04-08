const express = require('express')
const { log } = require('node:console')
const app = express()
const port = 3000
const postsRouter = require("./routers/posts")


//ENTRY POINT

app.get('/', (req, res) => {
  res.send('Sei nel server!')
})


//POSTS CRUD

app.use("/macchine", postsRouter)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
