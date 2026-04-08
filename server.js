const express = require('express')
const { log } = require('node:console')
const app = express()
const port = 3000
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





//INDEX
app.get('/macchine', (req, res) => {
  console.log('Sei nella rotta INDEX')

  res.send('Queste sono tutte le mie risorse')
})

//SHOW
app.get('/macchine/:id', (req, res) => {
  const id = req.params.id
  console.log('Sei nella rotta SHOW')

  res.send(`Stai visualizzando  la risorsa numero ${id}`)

})

//STORE
app.post('/macchine', (req, res) => {
  console.log('Sei nella rotta STORE');

  res.send('Stai aggiungendo una nuova risorsa.')
})

//UPDATE
app.put('/macchine/:id', (req, res) => {
  console.log('Sei nella rotta UPDATE')
  const id = req.params.id

  res.send(`Sta aggiornado la risorsa numero ${id}`)

})

//MODIFY
app.patch('/macchine/:id', (req, res) => {
  console.log('Sei nella rotta MODIFY')
  const id = req.params.id

  res.send(`Sta aggiorando UNA PARTE della risorsa ${id}`)

})

//DESTROY
app.delete('/macchine/:id', (req, res) => {
  console.log('Sei nella rotta DESTROY')
  const id = req.params.id

  res.send(`Sto eliminando la risorsa ${id}`)
  
} )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
