 const pool = require ("../../config/database");

 module.exports = {
 create: (data, callBack) => {
     
     pool.query(
         `insert into notification ( name, des, user_id ) values(?,?,?)`,
      [          
             data.name,
              data.des,
             data.user_id
      ],
      (error, results, fields,) => {
        if (error){
            return callBack(error);
        }
        return callBack(null,results)
      }
     );
 },
 getnotification: ( callBack) => {
    pool.query(
      `select * from notification`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
 },
 getnotificationById: (id, callBack) => {
    pool.query(
      `select * from notification where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatenotification: (data, callBack) => {
    pool.query(
      `update notification set name = ?, des = ?, user_id = ?  where id = ?`,
      [
        data.name,
         data.des,
        data.user_id,
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
  deletenotification: (data, callBack) => {
    pool.query(
      `delete from notification where id = ?`,
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
