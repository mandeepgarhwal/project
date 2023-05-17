
const { createnotice, getnoticeById,    getnotices,    updatenotices, deletenotice, login }= require("./notice.controller");
const router = require("express").Router();
const multer = require("multer");
const{ checkToken} = require ("../../auth/token_validation");

const upload = multer({ dest: 'uploads/' });

router.post("/", upload.none(),  createnotice);
router.get("/",   getnotices);
router.get("/:id",  getnoticeById);
router.patch("/" , upload.none(), updatenotices);
router.delete("/", upload.none(), deletenotice);

module.exports = router;