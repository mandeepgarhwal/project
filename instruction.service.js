 const pool = require ("../../config/database");

 module.exports = {
 create: (data, callBack) => {
     
     pool.query(
         `insert into instruction ( tittle ) values(?)`,
      [          
             data.tittle ,
              
             
      ],
      (error, results, fields,) => {
        if (error){
            return callBack(error);
        }
        return callBack(null,results)
      }
     );
 },
 getinstruction: ( callBack) => {
    pool.query(
      `select * from instruction`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
 },
 getinstructionById: (id, callBack) => {
    pool.query(
      `select * from instruction where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateinstruction: (data, callBack) => {
    pool.query(
      `update instruction set tittle = ?  where id = ?`,
      [
        data.tittle ,
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
  deleteinstruction: (data, callBack) => {
    pool.query(
      `delete from instruction where id = ?`,
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
