
const { createcategory, getcategoryById,    getcategorys,    updatecategorys, deletecategory, login }= require("./category.controller");
const router = require("express").Router();
const multer = require("multer");
const{ checkToken} = require ("../../auth/token_validation");

const upload = multer({ dest: 'uploads/' });

router.post("/", upload.none(),  createcategory);
router.get("/",   getcategorys);
router.get("/:id",  getcategoryById);
router.patch("/" , upload.none(),  updatecategorys);
router.delete("/", upload.none(),   deletecategory);

module.exports = router;