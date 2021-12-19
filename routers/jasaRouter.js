const router = require("express").Router();
const jasaCtrl = require("../controllers/jasaCtrl");

router.route("/jasa").get(jasaCtrl.getAll).post(jasaCtrl.createJasa);

router
  .route("/jasa/:namaJasa")
  .get(jasaCtrl.getJasa)
  .delete(jasaCtrl.deleteJasa)
  .put(jasaCtrl.updateJasa);

module.exports = router;
