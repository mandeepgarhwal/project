const {create, getmessageById, getmessage, updatemessage, deletemessage } = require("./message.service");

 const { genSaltSync, hashSync, compareSync }  = require("bcrypt");
 const { sign } = require ("jsonwebtoken"); 

module.exports ={
     createmessage: (req, res) =>{
        const body = req.body;
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
    getmessageById: ( req, res ) =>{
        const id = req.params.id;
        getmessageById(id, (err, results) => {
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
    getmessages: (req, res) => {
        getmessage((err, results) => {
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
      updatemessages: (req, res) => {
        const body = req.body;
        updatemessage(body, (err, results) => {
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
      deletemessage: (req, res) => {
        const data = req.body;
        deletemessage(data, (err, results) => {
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
            message: "message deleted successfully"
          });
        });
      },
    };

            
            
            
            
