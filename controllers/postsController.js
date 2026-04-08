
const macchine = require('../data/macchine')
//INDEX CONTROLLER
const index = (req, res) => {
    let filtredBytag = macchine
    const tagQuery = req.query.tag
    console.log('Sei nella rotta INDEX')

    if (tagQuery) {
        filtredBytag = macchine.filter(macchina => macchina.tag.includes(tagQuery))
    }

    res.json(filtredBytag)
}

//STORE CONTROLLER
const store = (req, res) => {
    console.log('Sei nella rotta STORE')
    console.log(req.body)
    const newId = macchine.at(-1).id + 1
    const { marca, modello, cavalli, prezzo, tag } = req.body
    const newCar = {
        id: newId,
        marca,
        modello,
        cavalli,
        prezzo,
        tag
    }
    macchine.push(newCar)
    res.json(newCar)
}

//SHOW CONTROLLER
const show = (req, res) => {
    const id = parseInt(req.params.id)
    console.log('Sei nella rotta SHOW')
    const macchina = macchine.find(macchina => macchina.id === id)
    if (!macchina) {

        res.status(404)
        console.log('ERRORE: Macchina non trovata');
        return res.json(
            {
                status: 404,
                error: 'Macchina non trovata'
            }
        )
    }

    res.send(macchina)
}

//UPDATE CONTROLLER
const update = (req, res) => {
    console.log('Sei nella rotta UPDATE')
    const id = parseInt(req.params.id)
    const { marca, modello, cavalli, prezzo, tag } = req.body
    const macchina = macchine.find(macchina => macchina.id === id)
    
    if(!macchina) {
        res.status(404)

        return res.json({
            status: 404,
            error: 'Nessuna macchina da aggiornare'
        })
    }
    
    macchina.marca = marca
    macchina.modello = modello
    macchina.cavalli = cavalli
    macchina.prezzo = prezzo
    macchina.tag = tag

    console.log(macchine);
    
    res.json(macchina)
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
        res.send(
            {
                status: 404,
                error: 'Nessuna macchina da eliminare trovata'
            }
        )
    } else {
        macchine.splice(macchine.indexOf(macchina), 1)
        console.log(macchine);
        res.sendStatus(204)


    }

}


//EXPORTS
module.exports = { index, show, store, update, modify, destroy }