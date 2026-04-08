const express = require('express')
const { log } = require('node:console')
const app = express()
const port = 3000
const postsRouter = require("./routers/posts")
const macchine = [
  { id: 1, marca: "Fiat", modello: "500", cavalli: 70, prezzo: 15000 },
  { id: 2, marca: "Volkswagen", modello: "Golf", cavalli: 110, prezzo: 25000 },
  { id: 3, marca: "BMW", modello: "Serie 3", cavalli: 184, prezzo: 42000 },
  { id: 4, marca: "Audi", modello: "A4", cavalli: 190, prezzo: 45000 },
  { id: 5, marca: "Mercedes", modello: "Classe A", cavalli: 136, prezzo: 35000 },
  { id: 6, marca: "Ford", modello: "Focus", cavalli: 125, prezzo: 23000 },
  { id: 7, marca: "Toyota", modello: "Yaris", cavalli: 116, prezzo: 22000 },
  { id: 8, marca: "Tesla", modello: "Model 3", cavalli: 283, prezzo: 48000 },
  { id: 9, marca: "Hyundai", modello: "i30", cavalli: 120, prezzo: 21000 },
  { id: 10, marca: "Peugeot", modello: "208", cavalli: 100, prezzo: 20000 }
];


//ENTRY POINT

app.get('/', (req, res) => {
  res.send('Sei nel server!')
})


//POSTS CRUD

app.use("/macchine", postsRouter)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
