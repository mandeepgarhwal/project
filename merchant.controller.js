const {create, getmerchantById, getmerchant, updatemerchant, deletemerchant } = require("./merchant.service");
const path = require('path')
 const { genSaltSync, hashSync, compareSync }  = require("bcrypt");
 const { sign } = require ("jsonwebtoken"); 

module.exports ={
     createmerchant: (req, res) =>{
        const body = req.body;
        console.log(req.file);
        body.photo = req.file.destination +'/'+req.file.filename;

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
    getmerchantById: ( req, res ) =>{
        const id = req.params.id;
        getmerchantById(id, (err, results) => {
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
    getmerchants: (req, res) => {
        getmerchant((err, results) => {
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
      updatemerchants: (req, res) => {
        const body = req.body;
        console.log(req.file);
        body.photo = req.file.destination +'/'+req.file.filename;
        updatemerchant(body, (err, results) => {
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
      deletemerchant: (req, res) => {
        const data = req.body;
        deletemerchant(data, (err, results) => {
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
            message: "merchant deleted successfully"
          });
        });
      },
    };

            
            
            
            
