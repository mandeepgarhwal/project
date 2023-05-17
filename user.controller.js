const {create, getUserByUserId, getUser, updateUser, deleteUser, getUserByUserEmail } = require("./user.service");
const path = require('path')
 const { genSaltSync, hashSync, compareSync }  = require("bcrypt");
 const { sign } = require ("jsonwebtoken"); 

module.exports ={
     createUser: (req, res) => {
        const body = req.body;
        console.log(req.file);
        body.photo = req.file.destination +'/'+req.file.filename;
        const salt =  genSaltSync(10);
        body.password = hashSync(body.password,salt)
        create(body, (err,results) =>{
        if (err){
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
        });
    },
    getUserByUserId: ( req, res ) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success:0,
                    message: "Record not Found"
                });
            }
            return res.json({
                success:1,
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUser((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      updateUsers: (req, res) => {
        const body = req.body;
        console.log(req.file);
        body.photo = req.file.destination +'/'+req.file.filename;

        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
      },
      deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record Not Found"
            });
          }
          return res.json({
            success: 1,
            message: "user deleted successfully"
          });
        });
      },
      login: (req, res) => {
        const body = req.body; 
        getUserByUserEmail( body.email,( err, results) =>{
          console.log(body)
          if (err) {
            console.log(err);
          } 
          if ( !results || !results[0]){
            return res.json({
              success: 0,
              data: " invalid email or password"
            });

          }
          
           const result = compareSync(body.password, results[0].password);
           if (result){
            results.password = undefined;
            const jsonwebtoken = sign ({ result: results}, "qwe1234" );
            return res.json({
              success: 1,
              message: "login succesfully",
              token: jsonwebtoken  
            });
           } else {
             return res.json({
              success: 0,
              data:"Invalid email or password "
             }); 
           }

        }
        
        ) 
      },
    };

            
            
            
            
