
const ExitTicket = require('../../models/exitTicket')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteExitTicket,

}


async function index(req, res) {
    ExitTicket.find({}, function (err, ExitTickets){
        res.json(ExitTickets)
    })
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        const newExitTicket = await ExitTicket.create(req.body);
        res.json(newExitTicket)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function show(req, res) {
    const viewExitTicket = await ExitTicket.findById(req.params.id)
    res.json(viewExitTicket)
}

async function update(req, res) {
    const updatedExitTicket = await ExitTicket.findById(req.params.id)
    updatedExitTicket.title = req.body.title
    updatedExitTicket.question = req.body.question
    await updatedExitTicket.save()
    res.json(updatedExitTicket)
}

async function deleteExitTicket(req, res){
    await ExitTicket.deleteOne({_id: req.params.id})
    res.json(req.params.id)
}