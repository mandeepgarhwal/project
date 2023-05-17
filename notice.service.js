 const pool = require ("../../config/database");

 module.exports = {
 create: (data, callBack) => {
     
     pool.query(
         `insert into notice ( title) values(?)`,
      [          
             data.title
      ],
      (error, results, fields,) => {
        if (error){
            return callBack(error);
        }
        return callBack(null,results)
      }
     );
 },
 getnotice: ( callBack) => {
    pool.query(
      `select * from notice`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
 },
 getnoticeById: (id, callBack) => {
    pool.query(
      `select * from notice where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatenotice: (data, callBack) => {
  
    pool.query(
      `update notice set title= ? where id = ?`,
      [
        data.title,
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
  deletenotice: (data, callBack) => {
    pool.query(
      `delete from notice where id = ?`,
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
