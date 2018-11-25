import mysql from 'mysql';
import connection from '../db';

function addActor(name, sex, dob, bio) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO actors (name, sex, dob, bio) VALUES (?,?,?,?)';
    const query = mysql.format(sql, [name, sex, dob, bio]);
    connection.query(query, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}
export default undefined;
export { addActor };
