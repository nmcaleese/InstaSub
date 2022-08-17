const CI = require("../../models/CI");

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteCI,
};

async function index(req, res) {
  CI.find({}, function (err, cis) {
    res.json(cis);
  });
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const newCI = await CI.create(req.body);
    res.json(newCI);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function show(req, res) {
  const viewCI = await CI.findById(req.params.id);
  res.json(viewCI);
}

async function update(req, res) {
  const updatedCI = await CI.findById(req.params.id);
  updatedCI.class = req.body.class;
  updatedCI.period = req.body.period;
  updatedCI.classroomInstructions = req.body.classroomInstructions;
  await updatedCI.save();
  res.json(updatedCI);
}

async function deleteCI(req, res) {
  await CI.deleteOne({ _id: req.params.id });
  res.json(req.params.id);
}
