const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({ arquivado: false });
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.get("/search", async (req, res) => {
  try {
    const tasks = await Task.find({
      task: { $regex: new RegExp(req.query.q), $options: "i" },
    }).limit(5);
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
    const tasks = await Task.find({ arquivado: false });
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
