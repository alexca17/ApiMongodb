const { default: mongoose } = require("mongoose");
const model = require("../models/users");

const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

exports.getUsers = (req, res) => {
  model.find({}, (err, data) => {
    res.send(data);
  });
};

exports.createUser = async (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if (err) {
      res.send({ error: "Error" }, 422);
    } else {
      res.send({ data: docs });
    }
  });
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  model.findOne({_id: parseId(id)}, (err, data) => {
    res.send(data);
  });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  model.deleteOne({ _id: parseId(id) }, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  model.updateOne({ _id: parseId(req.params.id) }, body, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};
