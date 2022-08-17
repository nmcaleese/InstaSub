const FirstFive = require("../../models/firstFive");

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteFirstFive,
};

async function index(req, res) {
  FirstFive.find({}, function (err, FirstFives) {
    res.json(FirstFives);
  });
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const newFirstFive = await FirstFive.create(req.body);
    res.json(newFirstFive);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function show(req, res) {
  const viewFirstFive = await FirstFive.findById(req.params.id);
  res.json(viewFirstFive);
}

async function update(req, res) {
  const updatedFirstFive = await FirstFive.findById(req.params.id);
  updatedFirstFive.title = req.body.title;
  updatedFirstFive.prompt = req.body.prompt;
  await updatedFirstFive.save();
  res.json(updatedFirstFive);
}

async function deleteFirstFive(req, res) {
  await FirstFive.deleteOne({ _id: req.params.id });
  res.json(req.params.id);
}
