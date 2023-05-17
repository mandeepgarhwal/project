 const pool = require ("../../config/database");

 module.exports = {
 create: (data, callBack) => {
     
     pool.query(
         `insert into user ( name, age, address, city, occupation, phno, photo, email, password, paid )
                values (?,?,?,?,?,?,?,?,?,?)`,
      [          
             data.name,
              data.age,
             data.address,
            data.city,
             data.occupation,
             data.phno,
             data.photo,
             data.email,
             data.password,
             data.paid
      ],
      (error, results, fields,) => {
        if (error){
            return callBack(error);
        }
        return callBack(null,results)
      }
     );
 },
 getUser: ( callBack) => {
    pool.query(
      `select name, age, address, city, occupation, phno, photo, email, password, paid from user`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
 },
 getUserByUserId: (id, callBack) => {
    pool.query(
      `select  name, age, address, city, occupation, phno, photo, email, password, paid from user where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (id, callBack) => {
     pool.query(
       `select name, age, address, city, occupation, phno, photo, email, password, paid from user where email = ?`,
       [id],
       (error, results, fields) => {
        console.log(results)
         if (error) {
         return callBack(error);
         }
         
         return callBack(null, results);
       }
     );
   },
  updateUser: (data, callBack) => {
    pool.query(
      `update user set name= ?, age= ?, address= ?, city= ?, occupation= ?, phno= ?, photo=?, email= ?, password= ?, paid= ? where id = ?`,
      [
        data.name,
        data.age,
        data.address,
        data.city,
        data.occupation,
        data.phno,
        data.photo,
        data.email,
        data.password,
        data.paid,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null,results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from user where id = ?`,
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
