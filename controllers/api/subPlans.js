const SubPlan = require('../../models/subPlan')

module.exports = {
    create,
}

async function create(req, res) {
    console.log(req.body)
    try{
        req.body.user = req.user._id
        const newSubPlan = await SubPlan.create({
            name: req.body[0].name,
            CI: req.body[1]._id,
            firstFive: req.body[2]._id,
            lessonPlan: req.body[3]._id,
            exitTicket: req.body[4]._id,
            user: req.body.user
        });
        res.json(newSubPlan)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}