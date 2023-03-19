const router = require("express").Router();

const weaponsRoutes = require("./weaponsRoutes");
const heroesRoutes = require("./heroesRoutes");
const hospitalRoutes = require("./hospitalRoutes");



router.use("/weapons", weaponsRoutes);
router.use("/heroes", heroesRoutes);
router.use("/hospital", hospitalRoutes);



module.exports = router;