const SubPlan = require("../../models/subPlan");

module.exports = {
  index,
  create,
  show,
  delete: deleteSubPlan,
};

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const newSubPlan = await SubPlan.create({
      name: req.body[0].name,
      CI: req.body[1]._id,
      firstFive: req.body[2]._id,
      lessonPlan: req.body[3]._id,
      exitTicket: req.body[4]._id,
      user: req.body.user,
    });
    res.json(newSubPlan);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function index(req, res) {
  SubPlan.find({}, function (err, SubPlans) {
    res.json(SubPlans);
  });
}

async function show(req, res) {
  const viewSubPlan = await SubPlan.findById(req.params.id);
  const populatedPlan = await (
    await (
      await (await viewSubPlan.populate("CI")).populate("firstFive")
    ).populate("lessonPlan")
  ).populate("exitTicket");
  res.json(populatedPlan);
}
async function deleteSubPlan(req, res) {
  await SubPlan.deleteOne({ _id: req.params.id });
  res.json(req.params.id);
}
