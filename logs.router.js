
const { createlogs, getlogsById,    getlogss,    updatelogss, deletelogs, login }= require("./logs.controller");
const router = require("express").Router();
const multer = require("multer");
const{ checkToken} = require ("../../auth/token_validation");

const upload = multer({ dest: 'uploads/' });

router.post("/", upload.none(), createlogs);
router.get("/",   getlogss);
router.get("/:id",  getlogsById);
router.patch("/" , upload.none(), updatelogss);
router.delete("/", upload.none(), deletelogs);

module.exports = router;