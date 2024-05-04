const express = require("express");
const task = require("../models/task");
const router = express.Router();

router.get("/", async (req, res) => {
    let data =await task.find();
    res.json(data);
});

router.post("/", async (req, res) => {
    await task.create(req.body);
    let data =await task.find();
    res.json(data);
});

router.delete("/:id", async (req, res) => {
     await task.deleteOne({
        _id: req.params.id
    });
    let data =await task.find();
    res.json(data);
});

router.put('/:id', async (req, res) => {
    await task.updateOne({ _id: req.params.id }, req.body)
    let data =await task.find();
    res.send(data);
})

module.exports = router;