const {create, getinstructionById, getinstruction, updateinstruction, deleteinstruction } = require("./instruction.service");

 const { genSaltSync, hashSync, compareSync }  = require("bcrypt");
 const { sign } = require ("jsonwebtoken"); 

module.exports ={
     createinstruction: (req, res) =>{
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
    getinstructionById: ( req, res ) =>{
        const id = req.params.id;
        getinstructionById(id, (err, results) => {
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
    getinstructions: (req, res) => {
        getinstruction((err, results) => {
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
      updateinstructions: (req, res) => {
        const body = req.body;
        updateinstruction(body, (err, results) => {
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
      deleteinstruction: (req, res) => {
        const data = req.body;
        deleteinstruction(data, (err, results) => {
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
            message: "instruction deleted successfully"
          });
        });
      },
    };

            
            
            
            
