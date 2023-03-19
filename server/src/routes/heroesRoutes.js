const router = require("express").Router();
const heroesController = require("../controllers/heroesController");

router
.route("/")
.get(heroesController.getAll)
.post(heroesController.createHero);

router
.route("/:id")
.put(heroesController.updateOneHero)
.delete(heroesController.deleteHero);

router
.route("/move")
.get(heroesController.moveToHospital);

module.exports = router;