 const pool = require ("../../config/database");

 module.exports = {
 create: (data, callBack) => {
     
     pool.query(
         `insert into listing ( title, des, call_no, address, category_id, audio , avg_cost , photo,service_id, mode , estblish , verified) values(?,?,?,?,?,?,?,?,?,?,?,?)`,
      [          
             data.title,
             data.des,
             data.call_no,
             data.address,
             data.category_id,
             data.audio,
             data.avg_cost,
             data.photo,
            data.service_id,
            data.mode,
            data.estblish,
            data.verified
            
              
             
      ],
      (error, results, fields,) => {
        if (error){
            return callBack(error);
        }
        return callBack(null,results)
      }
     );
 },
 getlisting: ( callBack) => {
    pool.query(
      `select * from listing`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
 },
 getlistingById: (id, callBack) => {
    pool.query(
      `select * from listing where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatelisting: (data, callBack) => {
    pool.query(
      `update listing set  title = ?, des = ?, call_no = ?, address = ?, category_id = ?, audio =? , avg_cost = ? , photo = ?, service_id = ?, mode = ? , estblish = ?, verified = ?  where id = ?`,
      [
            data.title,
             data.des,
             data.call_no,
             data.address,
             data.category_id,
             data.audio,
             data.avg_cost,
             data.photo,
             data.service_id,
            data.mode,
            data.estblish,
            data.verified,
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
  deletelisting: (data, callBack) => {
    pool.query(
      `delete from listing where id = ?`,
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
