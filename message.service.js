 const pool = require ("../../config/database");

 module.exports = {
 create: (data, callBack) => {
     
     pool.query(
         `insert into message ( from_user, to_user , msg ) values(?,?,?)`,
      [          
             data.from_user,
              data.to_user,
             data.msg             
      ],
      (error, results, fields,) => {
        if (error){
            return callBack(error);
        }
        return callBack(null,results)
      }
     );
 },
 getmessage: ( callBack) => {
    pool.query(
      `select * from message`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
 },
 getmessageById: (id, callBack) => {
    pool.query(
      `select * from message where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatemessage: (data, callBack) => {
    pool.query(
      `update message set from_user = ?, to_user = ?, msg = ?  where id = ?`,
      [
        data.from_user,
        data.to_user,
        data.msg,
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
  deletemessage: (data, callBack) => {
    pool.query(
      `delete from message where id = ?`,
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
