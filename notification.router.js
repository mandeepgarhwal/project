
const { createnotification, getnotificationById,    getnotifications,    updatenotifications, deletenotification, login }= require("./notification.controller");
const router = require("express").Router();
const multer = require("multer");
const{ checkToken} = require ("../../auth/token_validation");

const upload = multer({ dest: 'uploads/' });

router.post("/", upload.none(), createnotification);
router.get("/",   getnotifications);
router.get("/:id",  getnotificationById);
router.patch("/" , upload.none(), updatenotifications);
router.delete("/",  upload.none(),deletenotification);

module.exports = router;