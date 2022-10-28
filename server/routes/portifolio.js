const router = require("express").Router();
const Portifolio = require("../models/Portifolio");

router.get("/", async (req, res) => {
  try {
    const portifolio = await Portifolio.find();
    res.json({
      sucess: true,
      data: portifolio,
    });
  } catch (err) {
    res.json({
      sucess: false,
      message: err,
    });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const portifolio = await Portifolio.findOne({ slug: req.params.slug });

    res.json({
      sucess: true,
      data: portifolio,
    });
  } catch (err) {
    res.json({
      sucess: false,
      message: err,
    });
  }
});

router.post("/", async (req, res) => {
  const portifolio = new Portifolio({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPortifolio = await portifolio.save();
    res.json({
      sucess: true,
      data: savedPortifolio,
    });
  } catch (err) {
    res.json({
      sucess: false,
      message: err,
    });
  }
});

module.exports = router;
