
const { createlisting, getlistingById,    getlistings,    updatelistings, deletelisting, login }= require("./listing.controller");
const router = require("express").Router();
const multer = require("multer");
const{ checkToken} = require ("../../auth/token_validation");

const upload = multer({ 
                storage: multer.diskStorage({
                    destination: function(req, file,cb){
                        cb(null, "uploads")
                    },
                    filename: function (req, file, cb){
                        console.log(file);
                        if(file.fieldname == 'audio'){
                            cb(null, file.fieldname + "_"+ Date.now()+".mp3");
                        }
                        if(file.fieldname == 'photo'){
                            cb(null, file.fieldname + "_"+ Date.now()+".jpg");
                        }
                        
                    }
                })
            }); 

            

router.post("/", upload.fields([{ name: 'photo', maxCount: 12 }, { name: 'audio', maxCount: 1 }]), createlisting);
router.get("/",   getlistings);
router.get("/:id",  getlistingById);
router.patch("/", upload.fields([{ name: 'photo', maxCount: 12 }, { name: 'audio', maxCount: 1 }]), updatelistings);
router.delete("/", upload.none(), deletelisting);


module.exports = router;