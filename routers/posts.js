const express = require('express')
const router = express.Router()

//INDEX
router.get('/', (req, res) => {
  console.log('Sei nella rotta INDEX')

  res.send('Queste sono tutte le mie risorse')
})

//SHOW
router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log('Sei nella rotta SHOW')

  res.send(`Stai visualizzando  la risorsa numero ${id}`)

})

//STORE
router.post('/', (req, res) => {
  console.log('Sei nella rotta STORE');

  res.send('Stai aggiungendo una nuova risorsa.')
})

//UPDATE
router.put('/:id', (req, res) => {
  console.log('Sei nella rotta UPDATE')
  const id = req.params.id

  res.send(`Sta aggiornado la risorsa numero ${id}`)

})

//MODIFY
router.patch('/:id', (req, res) => {
  console.log('Sei nella rotta MODIFY')
  const id = req.params.id

  res.send(`Sta aggiorando UNA PARTE della risorsa ${id}`)

})

//DESTROY
router.delete('/:id', (req, res) => {
  console.log('Sei nella rotta DESTROY')
  const id = req.params.id

  res.send(`Sto eliminando la risorsa ${id}`)
  
} )

module.exports = router;