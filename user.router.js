
const { createUser, getUserByUserId,getUsers,updateUsers, deleteUser,login }= require("./user.controller");
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

router.post("/", upload.single('photo'),createUser);
router.get("/",  checkToken, getUsers); 
router.get("/:id",checkToken,getUserByUserId);
router.patch("/", upload.single('photo'),checkToken,updateUsers);
router.delete("/",upload.none(),checkToken,deleteUser);
router.post("/login",upload.none(),login);

module.exports = router; 