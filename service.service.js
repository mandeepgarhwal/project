 const pool = require ("../../config/database");

 module.exports = {
 create: (data, callBack) => {
     
     pool.query(
         `insert into service ( tittle) values(?)`,
      [          
             data.tittle
      ],
      (error, results, fields,) => {
        if (error){
            return callBack(error);
        }
        return callBack(null,results)
      }
     );
 },
 getservice: ( callBack) => {
    pool.query(
      `select * from service`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
 },
 getserviceById: (id, callBack) => {
    pool.query(
      `select * from service where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateservice: (data, callBack) => {
    pool.query(
      `update service set tittle = ? where id = ?`,
      [
        data.tittle,
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
  deleteservice: (data, callBack) => {
    pool.query(
      `delete from service where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
