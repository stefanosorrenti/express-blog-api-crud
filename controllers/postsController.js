
//INDEX CONTROLLER
const index = (req, res) => {
    console.log('Sei nella rotta INDEX')

    res.send('Queste sono tutte le mie risorse')
}

//STORE CONTROLLER
const store = (req, res) => {
  console.log('Sei nella rotta STORE');

  res.send('Stai aggiungendo una nuova risorsa.')
}

//SHOW CONTROLLER
const show = (req, res) => {
    const id = req.params.id
    console.log('Sei nella rotta SHOW')

    res.send(`Stai visualizzando  la risorsa numero ${id}`)

}

//UPDATE CONTROLLER
const update = (req, res) => {
    console.log('Sei nella rotta UPDATE')
    const id = req.params.id

    res.send(`Sta aggiornado la risorsa numero ${id}`)

}

//MODIFY CONTROLLER
const modify = (req, res) => {
    console.log('Sei nella rotta MODIFY')
    const id = req.params.id

    res.send(`Sta aggiorando UNA PARTE della risorsa ${id}`)

}


//DESTROY CONTROLLER

const destroy = (req, res) => {
    console.log('Sei nella rotta DESTROY')
    const id = req.params.id

    res.send(`Sto eliminando la risorsa ${id}`)

}


//EXPORTS
module.exports = { index, show, store, update, modify, destroy }