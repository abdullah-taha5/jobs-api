
const router = require("express").Router();
const { toggleLikeCtrl } = require("../controllers/userController");


// /api/users/like/:id
router.route("/like/:id").put(toggleLikeCtrl)

module.exports = router;
