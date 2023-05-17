 const pool = require ("../../config/database");

 module.exports = {
 create: (data, callBack) => {
     
     pool.query(
         `insert into logs ( no, duration ) values(?,?)`,
      [          
             data.no,
              data. duration,
             
      ],
      (error, results, fields,) => {
        if (error){
            return callBack(error);
        }
        return callBack(null,results)
      }
     );
 },
 getlogs: ( callBack) => {
    pool.query(
      `select * from logs`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
 },
 getlogsById: (id, callBack) => {
    pool.query(
      `select * from logs where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatelogs: (data, callBack) => {
    pool.query(
      `update logs set no = ?, duration = ?  where id = ?`,
      [
        data.no,
         data.duration,
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
  deletelogs: (data, callBack) => {
    pool.query(
      `delete from logs where id = ?`,
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
