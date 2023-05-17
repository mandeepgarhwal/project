 const pool = require ("../../config/database");

 module.exports = {
 create: (data, callBack) => {
     
     pool.query(
         `insert into merchant ( name,email,contact,address,state,d.o.j,category,gst,language,company,aadhaar,pan,work_experience,photo,zip_code,,email_verified,contact_verified),raduis,feedback values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,)`,
      [          
             data.name,
             data.email,
             data.contact,
             data.address,
             data.state,
             data.d.o.j,
             data.category,
             data.gst,
             data.language,
             data.company,
             data.aadhaar,
             data.pan,
             data.work_experience,
             data.photo,
             data.zip_code,
             data.email_verified,
             data.contact_verified,
             data.raduis,
             data.feedback
             
      ],
      (error, results, fields,) => {
        if (error){
            return callBack(error);
        }
        return callBack(null,results)
      }
     );
 },
 getmerchant: ( callBack) => {
    pool.query(
      `select * from merchant`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
 },
 getmerchantById: (id, callBack) => {
    pool.query(
      `select * from merchant where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatemerchant: (data, callBack) => {
    pool.query(
      `update merchant set  name = ?,email = ?,contact = ?,address = ?,state = ?,d.o.j = ?,category = ?,gst = ? ,language = ?,company = ?,aadhaar = ?,pan = ?,work_experience = ?,photo = ?,zip_code = ?,email_verified = ?,contact_verified = ?,raduis = ?,feedback = ? where id = ?`,
      [
        data.name,
        data.email,
        data.contact,
        data.address,
        data.state,
        data.d.o.j,
        data.category,
        data.gst,
        data.language,
        data.company,
        data.aadhaar,
        data.pan,
        data.work_experience,
        data.photo,
        data.zip_code,
        data.email_verified,
        data.contact_verified,
        data.raduis,
        data.feedback,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deletemerchant: (data, callBack) => {
    pool.query(
      `delete from merchant where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
