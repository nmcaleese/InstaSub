
const CI = require('../../models/CI')

module.exports = {
    create,
}


async function create(req, res) {
    const CI = new CI(req.body);
    CI.save(function(err) {
        if (err) return alert('error made when saving')
        res.json(CI)
})
}
