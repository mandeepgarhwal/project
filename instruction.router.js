
const { createinstruction, getinstructionById,    getinstructions,    updateinstructions, deleteinstruction, login }= require("./instruction.controller");
const router = require("express").Router();
const multer = require("multer");
const{ checkToken} = require ("../../auth/token_validation");

const upload = multer({ dest: 'uploads/' });

router.post("/", upload.none(),  createinstruction);
router.get("/",   getinstructions);
router.get("/:id",  getinstructionById);
router.patch("/" ,  upload.none(),updateinstructions);
router.delete("/", upload.none(), deleteinstruction);

module.exports = router;