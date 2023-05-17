 const pool = require ("../../config/database");

 module.exports = {
 create: (data, callBack) => {
     
     pool.query(
         `insert into category ( name, svg ) values(?,?)`,
      [          
             data.name,
             data.svg
              
             
      ],
      (error, results, fields,) => {
        if (error){
            return callBack(error);
        }
        return callBack(null,results)
      }
     );
 },
 getcategory: ( callBack) => {
    pool.query(
      `select * from category`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
 },
 getcategoryById: (id, callBack) => {
    pool.query(
      `select * from category where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatecategory: (data, callBack) => {
    pool.query(
      `update category set name = ?, svg = ?  where id = ?`,
      [
        data.name ,
        data.svg,
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
  deletecategory: (data, callBack) => {
    pool.query(
      `delete from category where id = ?`,
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
