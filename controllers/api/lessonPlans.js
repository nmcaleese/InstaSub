
const LessonPlan = require('../../models/lessonPlan')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteLessonPlan,

}


async function index(req, res) {
    LessonPlan.find({}, function (err, LessonPlans){
        res.json(LessonPlans)
    })
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        const newLessonPlan = await LessonPlan.create(req.body);
        res.json(newLessonPlan)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function show(req, res) {
    const viewLessonPlan = await LessonPlan.findById(req.params.id)
    res.json(viewLessonPlan)
}

async function update(req, res) {
    const updatedLessonPlan = await LessonPlan.findById(req.params.id)
    updatedLessonPlan.title = req.body.title
    updatedLessonPlan.subject = req.body.subject
    updatedLessonPlan.content = req.body.content
    await updatedLessonPlan.save()
    res.json(updatedLessonPlan)
}

async function deleteLessonPlan(req, res){
    await LessonPlan.deleteOne({_id: req.params.id})
    res.json(req.params.id)
}