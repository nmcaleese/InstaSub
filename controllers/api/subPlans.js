const SubPlan = require('../../models/subPlan')

module.exports = {
    create,
}

async function create(req, res) {
    console.log(req.body)
    try{
        req.body.user = req.user._id
        
        console.log(req.body)
        const newSubPlan = await SubPlan.create({
            CI: req.body[0]._id,
            firstFive: req.body[1]._id,
            lessonPlan: req.body[2]._id,
            exitTicket: req.body[3]._id,
            user: req.body.user
        });
        res.json(newSubPlan)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}