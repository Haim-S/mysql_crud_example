const router = require("express").Router();
const weaponsController = require("../controllers/weaponsController");

router
.route("/")
.get(weaponsController.getAll)
.post(weaponsController.createWeapon);

router
.route("/:id")
.put(weaponsController.updateOneWeapon)
.delete(weaponsController.deleteWeapon);

module.exports = router;