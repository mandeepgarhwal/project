
const { createmerchant, getmerchantById,    getmerchants,    updatemerchants, deletemerchant, login }= require("./merchant.controller");
const router = require("express").Router();
const multer = require("multer");
const{ checkToken} = require ("../../auth/token_validation");


const upload = multer({ 
    storage: multer.diskStorage({
        destination: function(req, file,cb){
            cb(null, "uploads")
        },
        filename: function (req, file, cb){
            cb(null, file.fieldname + "-"+ Date.now()+".jpg");
        }
    })
}); 



router.post("/", upload.single('photo'), createmerchant);
router.get("/",   getmerchants);
router.get("/:id",  getmerchantById);
router.patch("/", upload.single('photo'),  updatemerchants);
router.delete("/", upload.none(),  deletemerchant);

module.exports = router;