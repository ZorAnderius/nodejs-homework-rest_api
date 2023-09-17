const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { isValidId, validateBody } = require("../../middlewares");
const schemas = require("../../schema/contacts");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getContact);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
