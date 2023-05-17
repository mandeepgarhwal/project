
const { createmessage, getmessageById,    getmessages,    updatemessages, deletemessage, login }= require("./message.controller");
const router = require("express").Router();
const multer = require("multer");
const{ checkToken} = require ("../../auth/token_validation");

const upload = multer({ dest: 'uploads/' });

router.post("/", upload.none(), createmessage);
router.get("/",   getmessages);
router.get("/:id",  getmessageById);
router.patch("/" ,upload.none(),  updatemessages);
router.delete("/", upload.none(), deletemessage);

module.exports = router;