
const CI = require('../../models/CI')

module.exports = {
    index,
    create,
}


async function index(req, res) {
    console.log('hit')
    CI.find({}, function (err, cis){
        console.log(cis)
        res.json(cis)
    })
}


async function create(req, res) {
    try {
        req.body.user = req.user._id
        const newCI = await CI.create(req.body);
    console.log(newCI)
        res.json(newCI)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}
