const router = require("express").Router();
const { getUsers, saveScore } = require("../../controllers/user-controller.js");

router.route("/").get(getUsers);

router.route("/").post(saveScore);

module.exports = router;
