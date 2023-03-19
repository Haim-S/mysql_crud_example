const router = require("express").Router();
const hospitalController = require("../controllers/heroesController");

router
.route("/")
.get(hospitalController.getAll)
.post(hospitalController.createHero);

router
.route("/:id")
.put(hospitalController.updateOneHero)
.delete(hospitalController.deleteHero);


module.exports = router;