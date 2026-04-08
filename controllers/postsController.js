
const macchine = require('../data/macchine')
//INDEX CONTROLLER
const index = (req, res) => {
    console.log('Sei nella rotta INDEX')

    res.json(macchine)
}

//STORE CONTROLLER
const store = (req, res) => {
    console.log('Sei nella rotta STORE');

    res.send('Stai aggiungendo una nuova risorsa.')
}

//SHOW CONTROLLER
const show = (req, res) => {
    const id = parseInt(req.params.id)
    console.log('Sei nella rotta SHOW')
    const macchina = macchine.find(macchina => macchina.id === id)
    if (!macchina) {

        res.status(404)
        console.log('ERRORE: Macchina non trovata');
        return res.send('Macchina non trovata!')
    }

    res.send(macchina)
}

//UPDATE CONTROLLER
const update = (req, res) => {
    console.log('Sei nella rotta UPDATE')
    const id = parseInt(req.params.id)

    res.send(`Sta aggiornado la risorsa numero ${id}`)

}

//MODIFY CONTROLLER
const modify = (req, res) => {
    console.log('Sei nella rotta MODIFY')
    const id = parseInt(req.params.id)

    res.send(`Sta aggiorando UNA PARTE della risorsa ${id}`)

}


//DESTROY CONTROLLER

const destroy = (req, res) => {
    console.log('Sei nella rotta DESTROY')
    const id = parseInt(req.params.id)
    const macchina = macchine.find(macchina => macchina.id === id)
    if (!macchina) {
        res.status(404)
        res.send('Elemento non trovato')
    } else {
        macchine.splice(macchine.indexOf(macchina), 1)
        console.log(macchine);
        res.sendStatus(204)
        

    }

}


//EXPORTS
module.exports = { index, show, store, update, modify, destroy }