const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

const adminController = require("../controllers/adminController");
const clientController = require("../controllers/clientController");

const leadController = require("../controllers/leadController");
const productController = require("../controllers/productController");

//_______________________________ Admin management_______________________________

router.route("/user/create").post(catchErrors(adminController.create));
router.route("/user/read/:id").get(catchErrors(adminController.read));
router.route("/user/update/:id").patch(catchErrors(adminController.update));
router.route("/user/delete/:id").delete(catchErrors(adminController.delete));
router.route("/user/search").get(catchErrors(adminController.search));
router.route("/user/list").get(catchErrors(adminController.list));

router
  .route("/user/password-update/:id")
  .patch(catchErrors(adminController.updatePassword));
//list of admins ends here

//_____________________________________ API for clients __________________________
router.route("/pasien/create").post(catchErrors(clientController.create));
router.route("/pasien/read/:id").get(catchErrors(clientController.read));
router.route("/pasien/update/:id").patch(catchErrors(clientController.update));
router.route("/pasien/delete/:id").delete(catchErrors(clientController.delete));
router.route("/pasien/search").get(catchErrors(clientController.search));
router.route("/pasien/list").get(catchErrors(clientController.list));
router.route("/pasien/count/:status").get(catchErrors(clientController.countStatus));

//_____________________________________ API for leads ___________________________
router.route("/tracing/create").post(catchErrors(leadController.create));
router.route("/tracing/read/:id").get(catchErrors(leadController.read));
router.route("/tracing/update/:id").patch(catchErrors(leadController.update));
router.route("/tracing/delete/:id").delete(catchErrors(leadController.delete));
router.route("/tracing/search").get(catchErrors(leadController.search));
router.route("/tracing/list").get(catchErrors(leadController.list));

//_____________________________________ API for products ___________________________
router.route("/vacc/create").post(catchErrors(productController.create));
router.route("/vacc/read/:id").get(catchErrors(productController.read));
router
  .route("/vacc/update/:id")
  .patch(catchErrors(productController.update));
router
  .route("/vacc/delete/:id")
  .delete(catchErrors(productController.delete));
router.route("/vacc/search").get(catchErrors(productController.search));
router.route("/vacc/list").get(catchErrors(productController.list));

module.exports = router;
