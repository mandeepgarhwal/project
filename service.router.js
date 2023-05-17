
const { createservice, getserviceById,    getservices,    updateservices, deleteservice, login }= require("./service.controller");
const router = require("express").Router();
const multer = require("multer");
const{ checkToken} = require ("../../auth/token_validation");

const upload = multer({ dest: 'uploads/' });



router.post("/", upload.none(), createservice);
router.get("/",   getservices);
router.get("/:id",  getserviceById);
router.patch("/" ,upload.none(),  updateservices);
router.delete("/",upload.none(),  deleteservice);

module.exports = router;