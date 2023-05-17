const {create, getlistingById, getlisting, updatelisting, deletelisting } = require("./listing.service");
 const path = require('path')
 const { genSaltSync, hashSync, compareSync }  = require("bcrypt");
 const { sign } = require ("jsonwebtoken"); 

module.exports ={
     createlisting: (req, res) =>{
        const body = req.body;
        var photoT = '';
        for(var photoArray of req.files['photo']){
          photoT += ","+photoArray.destination +'/'+photoArray.filename;
        }
         body.photo = photoT.replace(',','');
        body.audio = req.files['audio'][0].destination +'/'+ req.files['audio'][0].filename;
        

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
    getlistingById: ( req, res ) =>{
        const id = req.params.id;
        getlistingById(id, (err, results) => {
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
    getlistings: (req, res) => {
        getlisting((err, results) => {
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
      updatelistings: (req, res) => {
        const body = req.body;
        console.log(req.files);
        var photoT = '';
        for(var photoArray of req.files){
          photoT += ","+photoArray.destination +'/'+photoArray.filename;
        }
         body.photo = photoT.replace(',','');

        updatelisting(body, (err, results) => {
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
      deletelisting: (req, res) => {
        const data = req.body;
        deletelisting(data, (err, results) => {
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
            message: "listing deleted successfully"
          });
        });
      },
    };

            
            
            
            
