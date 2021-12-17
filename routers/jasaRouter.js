const router = require("express").Router();
const jasaCtrl = require("../controllers/jasaCtrl");

router.route("/jasa").get(jasaCtrl.getJasa).post(jasaCtrl.createJasa);

router
  .route("/jasa/:namaJasa")
  .delete(jasaCtrl.deleteJasa)
  .put(jasaCtrl.updateJasa);

module.exports = router;
